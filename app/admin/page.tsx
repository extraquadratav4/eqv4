/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Team } from "@/models/team";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [teams, setTeams] = useState<Team[]>([]); // State to hold the teams

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch('/api/registeration');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const teamsData = await response.json();
        console.log(teamsData); // Log the fetched teams data
        setTeams(teamsData); // Update the state with the fetched teams
        console.log(teams); // Log the state after updating
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
    fetchTeams();
  }, []); // Empty dependency array to run once on component mount

  return (
    <section className="output flex flex-col items-center justify-center h-screen font-mono">
      <div className="">
      <h1>Admin Page</h1>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.school}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}