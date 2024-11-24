"use server";

const BASE_URL = "http://localhost:1337";

import { UserInformationI } from "@/components/interfaces";
import { revalidateTag } from "next/cache";

export async function addUserAction(data: UserInformationI) {
  const res = await fetch(`${BASE_URL}/user-informations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    revalidateTag("users");
  }

  return {
    isSuccess: res.ok,
    data: await res.json(),
  };
}

export async function updateUserAction(data: UserInformationI, id: number) {
  const res = await fetch(`${BASE_URL}/user-informations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    revalidateTag("users");
  }

  return {
    isSuccess: res.ok,
    data: await res.json(),
  };
}

export async function deleteUserAction(id: number) {
  const res = await fetch(`${BASE_URL}/user-informations/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    revalidateTag("users");
  }

  return {
    isSuccess: res.ok,
    data: await res.json(),
  };
}
