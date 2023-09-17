"use client";

import { ChannelType, MemberRole } from "@prisma/client";

import { ServerWithMembersWithProfiles } from "@/types";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

export const ServerSection = () => {
  return (
    <>
      <div>Server Section!</div>
    </>
  );
};
