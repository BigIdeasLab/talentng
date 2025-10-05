import React, { useEffect, useState } from "react";
import { Mentor } from "@/lib/types/mentor";
import { getMentorAvailability, bookSession } from "@/lib/api";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  mentor: Mentor;
}

type Availability = {
  date: string;
  slots: { startTime: string; endTime: string }[];
};

export default function BookingModal({
  open,
  onClose,
  mentor,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (open) {
      const fetchAvailability = async () => {
        try {
          setLoading(true);
          setError(null);
          const availableSlots = await getMentorAvailability(mentor.id);
          const groupedByDate = availableSlots.reduce((acc, slot) => {
            const date = new Date(slot.startTime).toLocaleDateString([], {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(slot);
            return acc;
          }, {} as Record<string, { startTime: string; endTime: string }[]>);

          const availabilityData = Object.entries(groupedByDate).map(
            ([date, slots]) => ({ date, slots }),
          );
          setAvailability(availabilityData);
        } catch (err) {
          setError("Failed to fetch availability. Please try again later.");
        } finally {
          setLoading(false);
        }
      };
      fetchAvailability();
    }
  }, [open, mentor.id]);

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setNotes("");
      setAvailability([]);
      setBookingConfirmed(false);
    }
  }, [open]);

  const handleBooking = async () => {
    if (!selectedTime) return;
    try {
      setLoading(true);
      setError(null);
      await bookSession(mentor.id, selectedTime);
      setBookingConfirmed(true);
      setStep(4);
    } catch (err: any) {
      setError(err.message || "Failed to book session. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    // Backdrop that blurs the entire page
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-[90%] max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <div className="text-lg font-semibold">Mentorship Session</div>
            <div className="text-sm text-gray-600">
              {mentor.fullName} • {mentor.headline}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {step < 4 && (
            <div className="text-sm text-gray-500 mb-4">STEP {step} of 3</div>
          )}

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {step === 1 && !loading && !error && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Select date</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availability.map(({ date }) => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      setStep(2);
                    }}
                    className={`p-4 rounded-lg border ${selectedDate === date ? "bg-black text-white" : "bg-white text-black"}`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && !loading && !error && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Select time</h3>
              <p className="text-sm text-gray-600">
                Date: {selectedDate}{" "}
                <button
                  className="text-orange-500 underline"
                  onClick={() => setStep(1)}
                >
                  Change
                </button>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {availability
                  .find((a) => a.date === selectedDate)
                  ?.slots.map((slot) => (
                    <button
                      key={slot.startTime}
                      onClick={() => setSelectedTime(slot.startTime)}
                      className={`px-4 py-3 rounded-full border ${selectedTime === slot.startTime ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                      {new Date(slot.startTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </button>
                  ))}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedTime}
                  className={`px-8 py-3 rounded-full ${selectedTime ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && !loading && !error && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Confirm Booking</h3>
              <p className="text-sm text-gray-600">
                Date: {selectedDate} .{" "}
                {new Date(selectedTime!).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                <button
                  className="text-orange-500 underline"
                  onClick={() => setStep(1)}
                >
                  Change
                </button>
              </p>

              <div className="mt-4 space-y-3">
                <div className="border rounded-2xl p-4">
                  <textarea
                    rows={5}
                    className="w-full bg-transparent outline-none text-sm"
                    placeholder="Add your question to this booking."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleBooking}
                  className="px-8 py-3 rounded-full bg-black text-white"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {step === 4 && bookingConfirmed && (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-green-600">Booking Confirmed!</h3>
              <p>Your session with {mentor.fullName} is confirmed.</p>
              <p>
                Date: {selectedDate} at{" "}
                {new Date(selectedTime!).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-black text-white"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
