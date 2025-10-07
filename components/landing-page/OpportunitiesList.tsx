
"use client";
import React from "react";
import { JobCard } from "@/components/opportunities/JobCard";
import { Opportunity } from "@/lib/types/opportunity";

interface OpportunitiesListProps {
  limit?: number;
  initialOpportunities: Opportunity[];
}

export function OpportunitiesList({ limit, initialOpportunities }: OpportunitiesListProps) {
  const opportunities = limit ? initialOpportunities.slice(0, limit) : initialOpportunities;

  const handleShare = (jobId: string) => {
    // TODO: Implement share functionality
    console.log("Sharing job:", jobId);
  };

  const handleApply = (jobId: string) => {
    // TODO: Implement apply functionality
    console.log("Applying for job:", jobId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {opportunities.map((job) => (
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
          hasApplied={false} // On landing page, we assume user has not applied
        />
      ))}
    </div>
  );
}
