import React, { useEffect, useState } from "react";

type Mentor = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  company: string;
  location: string;
};

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  mentor: Mentor;
}

export default function BookingModal({ open, onClose, mentor }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setNotes("");
    }
  }, [open]);

  if (!open) return null;

  return (
    // Backdrop that blurs the entire page
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-[95%] max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <div className="text-lg font-semibold">Mentorship Session</div>
            <div className="text-sm text-gray-600">{mentor.name} • {mentor.title} at {mentor.company}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="text-sm text-gray-500 mb-4">STEP {step} of 3</div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Select date and time</h3>
              <p className="text-sm text-gray-600">In your local timezone (auto-detected)</p>

              <div className="mt-4">
                {/* Simple calendar illustration using grid of dates */}
                <div className="bg-white border rounded-xl p-4">
                  <div className="text-2xl font-bold mb-4">January 2025</div>
                  <div className="grid grid-cols-7 gap-4 text-center">
                    {Array.from({ length: 31 }).map((_, i) => {
                      const day = i + 1;
                      const key = `d-${day}`;
                      const active = selectedDate === String(day);
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedDate(String(day))}
                          className={`py-4 rounded-md ${active ? 'bg-black text-white' : 'bg-transparent text-black'}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedDate}
                  className={`px-8 py-3 rounded-full ${selectedDate ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Select time</h3>
              <p className="text-sm text-gray-600">Date: {selectedDate ?? '—'}. <button className="text-orange-500 underline" onClick={() => setStep(1)}>Change</button></p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['12:15 am','1:30 am','2:45 am','3:00 am','3:15 am','4:00 am','4:15 am','4:45 am'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-4 py-3 rounded-full border ${selectedTime === t ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedTime}
                  className={`px-8 py-3 rounded-full ${selectedTime ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Confirm Booking</h3>
              <p className="text-sm text-gray-600">Date: {selectedDate ?? '—'} . {selectedTime ?? '—'} <button className="text-orange-500 underline" onClick={() => setStep(1)}>Change</button></p>

              <div className="mt-4 space-y-3">
                <div className="border rounded-2xl p-4">
                  <select className="w-full bg-transparent outline-none">
                    <option>Topic to be talked about</option>
                    <option>Resume review</option>
                    <option>Portfolio review</option>
                  </select>
                </div>

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
                  onClick={() => {
                    // pretend submit
                    alert(`Booking confirmed with ${mentor.name} on ${selectedDate} at ${selectedTime}`);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-full bg-black text-white"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
