import { clients } from "../constants";

function Clients() {
  return (
    <div className="h-[60px] flex gap-[100px] mt-[100px]">
      {clients.map((client) => (
        <img
          key={client.id}
          src={client.logo}
          alt={client.logo}
          className="w-[190px] object-contain"
        />
      ))}
    </div>
  );
}

export default Clients;
