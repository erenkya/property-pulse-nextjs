import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  const contents = {
    rentals: {
      color: "black",
      title: "For Renters",
      text: "Find your dream rental property. Bookmark properties and contact owners.",
      path: "/properties",
    },
    propertyOwners: {
      color: "blue",
      title: "For Property Owners",
      text: "List your properties and reach potential tenants. Rent as an airbnb or long term.",
      path: "/properties/add",
    },
  };

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox content={contents.rentals} />
          <InfoBox content={contents.propertyOwners} />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
