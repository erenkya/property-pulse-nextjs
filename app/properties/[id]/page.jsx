import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyImages from "@/components/ProprtyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";

const PropertyPage = async ({ params }) => {
    await connectDB();
    const property = await Property.findById(params.id).lean();

    return (
        <>
            <PropertyHeaderImage image={property.images[0]} />
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link href="/properties.html" className="text-blue-500 hover:text-blue-600 flex items-center">
                        <FaArrowLeft className="mr-2" />
                        Back to Properties
                    </Link>
                </div>
            </section>
            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <PropertyDetails property={property} />
                    </div>
                </div>
            </section>
            <PropertyImages images={property.images} />
        </>
    );
};

export default PropertyPage;
