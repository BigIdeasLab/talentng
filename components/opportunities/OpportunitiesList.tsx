"use client";
import React, { useState, useEffect } from "react";
import { JobCard } from "@/components/opportunities/JobCard";
import { getOpportunities } from "@/lib/api";
import { Opportunity } from "@/lib/types/opportunity";

interface OpportunitiesListProps {
  limit?: number;
}

export function OpportunitiesList({ limit }: OpportunitiesListProps) {
  const [jobListings, setJobListings] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getOpportunities({});
        setJobListings(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError("Failed to fetch opportunities.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [limit]);

  const handleShare = (jobId: string) => {
    // TODO: Implement share functionality
    console.log("Sharing job:", jobId);
  };

  const handleApply = (jobId: string) => {
    // TODO: Implement apply functionality or navigation to application
    console.log("Applying to job:", jobId);
  };

  if (loading) {
    return <div>Loading opportunities...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {jobListings.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          company={job.company}
          logo={job.logo}
          title={job.title}
          location={job.location}
          type={job.type}
          talent={job.talent}
          employmentType={job.employmentType}
          onShare={handleShare}
          onApply={handleApply}
        />
      ))}
    </div>
  );
}
