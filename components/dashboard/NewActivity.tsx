"use client";

import { FormEvent } from "react";

import { createActivity } from "@/lib/activity/services";

interface NewActivityProps {
  authorId: string;
}

function NewActivity({ authorId }: NewActivityProps) {
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await createActivity({
      authorId,
      title: formData.get("title") as string,
      maxDuration: Number(formData.get("maxDuration")),
    });

    alert("create activity successfully");
  }

  return (
    <div>
      <h2>New Activity</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="maxDuration">Max duration (in minutes)</label>
        <input type="number" id="maxDuration" name="maxDuration" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export { NewActivity };
