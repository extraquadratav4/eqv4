/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import NavBar from "@/components/nav";
import { Team } from "@/models/team";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  const [scioTeams, setScioTeams] = useState<Team[]>([]);
  const [siteTeams, setSiteTeams] = useState<Team[]>([]);
  const [decodeTeams, setDecodeTeams] = useState<Team[]>([]);
  const [parabellumTeams, setParabellumTeams] = useState<Team[]>([]);
  const [polemosTeams, setPolemosTeams] = useState<Team[]>([]);
  const [scavengerTeams, setScavengerTeams] = useState<Team[]>([]);
  const [memesisTeams, setMemesisTeams] = useState<Team[]>([]);
  const [robotTeams, setRobotTeams] = useState<Team[]>([]);
  const [socialTeams, setSocialTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch('/api/registeration');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const teamsData = await response.json();
        setTeams(teamsData);
        setScioTeams(teamsData.filter((team: Team) => team.event === "scio"));
        setSiteTeams(teamsData.filter((team: Team) => team.event === "site-incroyable"));
        setDecodeTeams(teamsData.filter((team: Team) => team.event === "esprit-decode"));
        setParabellumTeams(teamsData.filter((team: Team) => team.event === "parabellum"));
        setPolemosTeams(teamsData.filter((team: Team) => team.event === "polemos"));
        setScavengerTeams(teamsData.filter((team: Team) => team.event === "lux-veritas-implicas"));
        setMemesisTeams(teamsData.filter((team: Team) => team.event === "memesis"));
        setRobotTeams(teamsData.filter((team: Team) => team.event === "suiver"));
        setSocialTeams(teamsData.filter((team: Team) => team.event === "chroma"));
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    fetchTeams();
  }, []);

  const RenderTeams = (teams: Team[], title: string) => {
// todo display members
    return (
      <div className="mb-6 p-5 border">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold">{team.school}</h4>
              <p className="text-sm text-gray-400">Event: {team.event}</p>
              <p className="text-sm text-gray-400">Verified: {team.verified ? "Yes" : "No"}</p>
              <p className="text-sm text-gray-400">Members: {team.members.map((member) => 'name' in member ? member.name : "Unknown").join(", ")}</p>
              {/* Add more details here if available */}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="h-screen background-image bg-cover bg-center">
      <div className="output flex flex-col items-center h-screen backdrop-brightness-50 font-mono">
        <NavBar />
        <h1 className="text-4xl font-bold text-center mb-8">Admin Page</h1>
        <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RenderTeams(scioTeams, "Scio Teams")}
          {RenderTeams(siteTeams, "Site Teams")}
          {RenderTeams(decodeTeams, "Decode Teams")}
          {RenderTeams(parabellumTeams, "Parabellum Teams")}
          {RenderTeams(polemosTeams, "Polemos Teams")}
          {RenderTeams(scavengerTeams, "Scavenger Teams")}
          {RenderTeams(memesisTeams, "Memesis Teams")}
          {RenderTeams(robotTeams, "Robot Teams")}
          {RenderTeams(socialTeams, "Social Teams")}
        </div>
      </div>
      <div className="piece scanlines noclick"></div>
      <div className="piece glow noclick"></div>
    </section>
  );
}