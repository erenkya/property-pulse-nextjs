import Link from "next/link";

const InfoBox = ({ content }) => {
  return (
    <>
      {content.color === "black" ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{content.title}</h2>
          <p className="mt-2 mb-4">{content.text}</p>
          <Link href={content.path} className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Properties
          </Link>
        </div>
      ) : (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{content.title}</h2>
          <p className="mt-2 mb-4">{content.text}</p>
          <Link href={content.path} className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
            Add Property
          </Link>
        </div>
      )}
    </>
  );
};

export default InfoBox;
