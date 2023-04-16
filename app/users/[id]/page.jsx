import React from "react";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function page({ params }) {
  const data = await getUser(params.id);
  console.log(data);
  return (
    <div className="row">
      <div className="col-md-6 offset md-3  ">
        <div className="card">
          <div className="card-header text-center">
            <div className="card-body">
              <div>
                <h1>
                  {data.first_name} {data.last_name}
                </h1>
                <img src={data.avatar} alt="" />
                <p> {data.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
