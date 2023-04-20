"use client";

import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();
  return (
    <ul className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 gap-5 ">
      {users?.map((user) => (
        <li
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
          className="card lg:card-side bg-base-100 shadow-xl bg-slate-600 my-2 hover:translate-y-1 hover:transition-colors hover:shadow-lg"
        >
          <figure>
            <img src={user.avatar} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.email}</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">ver</button> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Users;
