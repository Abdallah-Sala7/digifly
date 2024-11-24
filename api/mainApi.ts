const BASE_URL = "http://localhost:1337";

export async function getAllUsers({ search }: { search?: string }) {
  try {
    const res = await fetch(
      `${BASE_URL}/user-informations${search ? `?FirstName=${search}` : ""}`,
      {
        cache: "no-store",
        next: {
          tags: ["users"],
        },
      }
    );

    return {
      isSuccess: res.ok,
      data: await res.json(),
    };
  } catch (error) {
    return {
      isSuccess: false,
      data: error,
    };
  }
}
