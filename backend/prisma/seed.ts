import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      name: "Automotive",
      children: [
        ..."Auto Accessories, Auto Dealers, Carwash, Gas Stations, Motorcycle Sales & Repair, Rental & Leasing, Service, Repair & Parts Towing".split(
          ","
        ),
      ],
    },
    {
      name: "Construction & Contractors",
      children: [
        ..."Architects, Landscape Architects, Engineers & Surveyors Blasting & Demolition, Building Materials & Supplies Construction Companies Electricians, Engineer, Survey Environmental Assessments Inspectors, Plaster & Concrete Plumbers, Roofers Painters".split(
          ","
        ),
      ],
    },
    {
      name: "Education",
      children: [
        ..."School, Books & Stationary Shop, Library, Digital Library".split(
          ","
        ),
      ],
    },
    { name: "Electronics Repair" },
    { name: "Energy" },
    {
      name: "Entertainment",
      children: [
        ..."Arkestra, Bank Party, DJ Sound, Music, Singer, Movie Hall".split(
          ","
        ),
      ],
    },
    { name: "Fitness & Wellness" },
    {
      name: "Food & Dining",
      children: [
        ..."Confectioner, Waiters Group, Desserts, Catering & Supplies Fast Food & Carry Out Grocery, Beverage & Tobacco Restaurants".split(
          ","
        ),
      ],
    },
    { name: "Grocery" },
    {
      name: "Health & Medicine",
      children: [
        ..."Hospital, Acupuncture, Assisted Living & Home Health Care, Audiologist, Chiropractic, Clinics & Medical Centers, Dental, Diet I& Nutrition, Laboratory, Imaging & Diagnostic Massage Therapy, Mental Health Nurse, Optical, Pharmacy, Drug & Vitamin Stores Physical Therapy, Physicians & Assistants Podiatry, Social Worker Animal Hospital, Veterinary & Animal Surgeons".split(
          ","
        ),
      ],
    },
    { name: "Home Services" },
    { name: "Home Decor" },
    {
      name: "Manufacturing, Wholesale, Distribution",
      children: [
        ..."Distribution, Import/Export Manufacturing, Wholesale".split(","),
      ],
    },
    {
      name: "Merchants (Retail)",
      children: [
        ..."Cards & Gifts, Clothing & Accessories, Department Stores, Sporting Goods General, Jewelry Shoes".split(
          ","
        ),
      ],
    },
    {
      name: "Personal Care & Services",
      children: [
        ..."Supplies Barber & Beauty Salons, Beauty Supplies, Dry Cleaners & Laundromats, Exercise & Fitness, Massage & Body Works, Nail Salons, Shoe Repairs, Tailors".split(
          ","
        ),
      ],
    },
    // {
    //   name: "Pharmacy",
    //   children: [
    //     ..."Laboratory, Imaging & Diagnostic Massage Therapy, Mental Health Nurse, Optical, Pharmacy, Drug & Vitamin Stores Physical Therapy, Physicians & Assistants Podiatry, Social Worker Animal Hospital, Veterinary & Animal Surgeons".split(
    //       ","
    //     ),
    //   ],
    // },
    {
      name: "Real Estate",
      children: [
        ..."Agencies & Brokerage, Agents & Brokers, Apartment & Home Rental, Mortgage Broker & Lender Property Management".split(
          ","
        ),
      ],
    },
    { name: "Restaurant" },
    { name: "Salon & Spa" },
    {
      name: "Travel & Transportation",
      children: [
        ..."Hotel, Motel & Extended Stay, Moving & Storage, Packaging & Shipping Transportation, Travel & Tourism".split(
          ","
        ),
      ],
    },
    {
      name: "Wedding & Events",
      children: [..."Tent House, Stage, Mandap, Wedding Planner".split(",")],
    },
  ];

  for (const category of categories) {
    const parent = await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: { name: category.name.trim() },
    });
    if (!category.children || category.children.length === 0) continue;

    for (const childName of category.children)
      await prisma.category.upsert({
        where: { name: childName.trim() },
        update: {},
        create: {
          name: childName.trim(),
          parentId: parent.id,
        },
      });
  }
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(() => prisma.$disconnect());
