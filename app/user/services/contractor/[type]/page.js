'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../../../components/footer/page';



const contractorData = {
  carpenter: {
    title: 'Carpenter',
    rating: '4.79',
    bookings: '4.1K',
    services: [
      { id: '1', title: 'Ceiling-mounted hanger Installation', category: 'Clothes hanger', price: 399, rating: 4.79, reviews: 4100 },
      { id: '2', title: 'Wall/door hanger Installation', category: 'Clothes hanger', price: 139, rating: 4.79, reviews: 4100 },
      { id: '3', title: 'Bed support repair', category: 'Bed', price: 139, rating: 4.79, reviews: 4100 },
      { id: '4', title: 'Bed legs/Headboard repair', category: 'Bed', price: 199, rating: 4.79, reviews: 4100 },
      { id: '5', title: 'Cupboard hinge Installation', category: 'Cupboard & drawer', price: 129, rating: 4.79, reviews: 4100 },
      { id: '6', title: 'Channel repair', category: 'Cupboard & drawer', price: 109, rating: 4.79, reviews: 4100 },
      { id: '7', title: 'Drawer channel replacement', category: 'Cupboard & drawer', price: 149, rating: 4.79, reviews: 4100 },
      { id: '8', title: 'Cupboard lock repair', category: 'Cupboard & drawer', price: 49, rating: 4.79, reviews: 4100 },
      { id: '9', title: 'Door accessory Installation', category: 'Door', price: 129, rating: 4.79, reviews: 4100 },
      { id: '10', title: 'peephole Installation', category: 'Door', price: 109, rating: 4.79, reviews: 4100 },
      { id: '11', title: 'Wooden Door Installation', category: 'Door', price: 149, rating: 4.79, reviews: 4100 },
      { id: '12', title: 'Major wooden door repair', category: 'Door', price: 199, rating: 4.79, reviews: 4100 },
      { id: '13', title: 'Bathroom holder & hanger Installation', category: 'Drill & hang', price: 69, rating: 4.79, reviews: 4100 },
      { id: '14', title: 'Drill & hang (wall decor)', category: 'Drill & hang', price: 49, rating: 4.79, reviews: 4100 },
      { id: '15', title: 'Bathroom mirror Installation', category: 'Drill & hang', price: 79, rating: 4.79, reviews: 4100 },
      { id: '16', title: 'Safety gate Installation', category: 'Drill & hang', price: 699, rating: 4.79, reviews: 4100 },
      { id: '17', title: 'Plastic buffer Installation (Upto 4)', category: 'Furniture repair', price: 79, rating: 4.79, reviews: 4100 },
      { id: '18', title: 'Chair wheels fitting', category: 'Furniture repair', price: 79, rating: 4.79, reviews: 4100 },
      { id: '19', title: 'Curtain blinds measurements', category: 'Window & curtain', price: 69, rating: 4.79, reviews: 4100 },
      { id: '20', title: 'Curtain rod Installation', category: 'Window & curtain', price: 695, rating: 4.79, reviews: 4100 },
      { id: '21', title: 'Window AC frame Installation', category: 'Window & curtain', price: 695, rating: 4.79, reviews: 4100 },
      { id: '22', title: 'Window hinge Installation', category: 'Window & curtain', price: 695, rating: 4.79, reviews: 4100 },
      { id: '23', title: 'Carpenter Consultation', category: 'Book A Consultation', price: 69, rating: 4.79, reviews: 4100 },
    ],
    quickServices: [
      { name: 'Furniture Fix' },
      { name: 'Door Repair' },
      { name: 'Cabinet Work' },
      { name: 'Installation' },
    ]
  },

  electrician: {
    title: 'Electrician',
    rating: '4.85',
    bookings: '5.2K',
    services: [
      { id: 'e1', title: 'Switch & Socket Installation', category: 'Electrical Fittings', price: 99, rating: 4.85, reviews: 5200 },
      { id: 'e2', title: 'Fan Installation & Repair', category: 'Electrical Fittings', price: 199, rating: 4.85, reviews: 5200 },
      { id: 'e3', title: 'Light Fixture Installation', category: 'Lighting', price: 149, rating: 4.85, reviews: 5200 },
      { id: 'e4', title: 'Chandelier Installation', category: 'Lighting', price: 399, rating: 4.85, reviews: 5200 },
      { id: 'e5', title: 'LED Strip Installation', category: 'Lighting', price: 299, rating: 4.85, reviews: 5200 },
      { id: 'e6', title: 'Wiring Repair & Replacement', category: 'Repairs', price: 299, rating: 4.85, reviews: 5200 },
      { id: 'e7', title: 'Short Circuit Detection', category: 'Repairs', price: 399, rating: 4.85, reviews: 5200 },
      { id: 'e8', title: 'MCB/Fuse Replacement', category: 'Safety', price: 199, rating: 4.85, reviews: 5200 },
      { id: 'e9', title: 'ELCB Installation', category: 'Safety', price: 499, rating: 4.85, reviews: 5200 },
      { id: 'e10', title: 'Appliance Installation', category: 'Installation', price: 249, rating: 4.85, reviews: 5200 },
      { id: 'e11', title: 'Exhaust Fan Installation', category: 'Installation', price: 199, rating: 4.85, reviews: 5200 },
      { id: 'e12', title: 'Electrician Consultation', category: 'Book A Consultation', price: 99, rating: 4.85, reviews: 5200 },
      { id: 'e13', title: 'Switch-Board ', category: 'Installation', price: 149, rating: 4.85, reviews: 5200 },
    ],
    quickServices: [
      { name: 'Switch Repair' },
      { name: 'Fan Service' },
      { name: 'Light Fitting' },
      { name: 'Wiring Check' },
      { name: 'Switch-board' },
    ]
  },
  painter: {
    title: 'Painter',
    rating: '4.72',
    bookings: '3.8K',
    services: [
      { id: 'p1', title: 'Interior Wall Painting (per sq ft)', category: 'Interior Painting', price: 12, rating: 4.72, reviews: 3800 },
      { id: 'p2', title: 'Ceiling Painting', category: 'Interior Painting', price: 15, rating: 4.72, reviews: 3800 },
      { id: 'p3', title: 'Door Painting', category: 'Interior Painting', price: 499, rating: 4.72, reviews: 3800 },
      { id: 'p4', title: 'Window Frame Painting', category: 'Interior Painting', price: 299, rating: 4.72, reviews: 3800 },
      { id: 'p5', title: 'Furniture Painting', category: 'Interior Painting', price: 699, rating: 4.72, reviews: 3800 },
      { id: 'p6', title: 'Exterior Wall Painting (per sq ft)', category: 'Exterior Painting', price: 15, rating: 4.72, reviews: 3800 },
      { id: 'p7', title: 'Exterior Door Painting', category: 'Exterior Painting', price: 599, rating: 4.72, reviews: 3800 },
      { id: 'p8', title: 'Texture Painting', category: 'Special Services', price: 25, rating: 4.72, reviews: 3800 },
      { id: 'p9', title: 'Stencil Painting', category: 'Special Services', price: 899, rating: 4.72, reviews: 3800 },
      { id: 'p10', title: 'Wood Polish', category: 'Finishing', price: 799, rating: 4.72, reviews: 3800 },
      { id: 'p11', title: 'Waterproofing', category: 'Protection', price: 999, rating: 4.72, reviews: 3800 },
      { id: 'p12', title: 'Painter Consultation', category: 'Book A Consultation', price: 149, rating: 4.72, reviews: 3800 },
    ],
    quickServices: [
      { name: 'Wall Paint' },
      { name: 'Door Paint' },
      { name: 'Texture' },
      { name: 'Polish' },
    ]
  },
  gardner: {
    title: 'Gardner',
    rating: '4.65',
    bookings: '2.9K',
    services: [
      { id: 'g1', title: 'Lawn Mowing', category: 'Garden Maintenance', price: 299, rating: 4.65, reviews: 2900 },
      { id: 'g2', title: 'Hedge Trimming', category: 'Garden Maintenance', price: 249, rating: 4.65, reviews: 2900 },
      { id: 'g3', title: 'Plant Trimming & Pruning', category: 'Garden Maintenance', price: 199, rating: 4.65, reviews: 2900 },
      { id: 'g4', title: 'Weed Removal', category: 'Garden Maintenance', price: 299, rating: 4.65, reviews: 2900 },
      { id: 'g5', title: 'Garden Cleaning', category: 'Garden Maintenance', price: 399, rating: 4.65, reviews: 2900 },
      { id: 'g6', title: 'Fertilizer Application', category: 'Plant Care', price: 249, rating: 4.65, reviews: 2900 },
      { id: 'g7', title: 'Pest Control for Plants', category: 'Plant Care', price: 349, rating: 4.65, reviews: 2900 },
      { id: 'g8', title: 'Plant Health Checkup', category: 'Plant Care', price: 199, rating: 4.65, reviews: 2900 },
      { id: 'g9', title: 'New Plant Installation', category: 'Landscaping', price: 499, rating: 4.65, reviews: 2900 },
      { id: 'g10', title: 'Garden Design', category: 'Landscaping', price: 1999, rating: 4.65, reviews: 2900 },
      { id: 'g11', title: 'Irrigation System Setup', category: 'Installation', price: 2999, rating: 4.65, reviews: 2900 },
      { id: 'g12', title: 'Gardner Consultation', category: 'Book A Consultation', price: 199, rating: 4.65, reviews: 2900 },
    ],
    quickServices: [
      { name: 'Mowing' },
      { name: 'Trimming' },
      { name: 'Watering' },
      { name: 'Fertilizing' },
    ]
  },
  construction: {
    title: 'Construction',
    rating: '4.88',
    bookings: '6.5K',
    services: [
      { id: 'c1', title: 'Masonry Work', category: 'Structural', price: 899, rating: 4.88, reviews: 6500 },
      { id: 'c2', title: 'Brickwork', category: 'Structural', price: 799, rating: 4.88, reviews: 6500 },
      { id: 'c3', title: 'Concrete Work', category: 'Structural', price: 999, rating: 4.88, reviews: 6500 },
      { id: 'c4', title: 'Plastering', category: 'Finishing', price: 699, rating: 4.88, reviews: 6500 },
      { id: 'c5', title: 'POP False Ceiling', category: 'Finishing', price: 1299, rating: 4.88, reviews: 6500 },
      { id: 'c6', title: 'Tile Installation', category: 'Flooring', price: 799, rating: 4.88, reviews: 6500 },
      { id: 'c7', title: 'Marble Flooring', category: 'Flooring', price: 1499, rating: 4.88, reviews: 6500 },
      { id: 'c8', title: 'Waterproofing', category: 'Protection', price: 999, rating: 4.88, reviews: 6500 },
      { id: 'c9', title: 'Crack Filling', category: 'Repairs', price: 499, rating: 4.88, reviews: 6500 },
      { id: 'c10', title: 'Wall Breaking', category: 'Demolition', price: 599, rating: 4.88, reviews: 6500 },
      { id: 'c11', title: 'Renovation Work', category: 'Renovation', price: 2999, rating: 4.88, reviews: 6500 },
      { id: 'c12', title: 'Construction Consultation', category: 'Book A Consultation', price: 299, rating: 4.88, reviews: 6500 },
    ],
    quickServices: [
      { name: 'Masonry' },
      { name: 'Plastering' },
      { name: 'Tiling' },
      { name: 'Flooring' },
    ]
  }, plumber: {
    title: 'Plumber',
    rating: '4.76',
    bookings: '3.4K',
    services: [
      { id: 'pl1', title: 'Tap repair', category: 'Tap & Mixer', price: 99, rating: 4.76, reviews: 3400 },
      { id: 'pl2', title: 'Mixer installation', category: 'Tap & Mixer', price: 199, rating: 4.76, reviews: 3400 },
      { id: 'pl3', title: 'Shower installation', category: 'Tap & Mixer', price: 249, rating: 4.76, reviews: 3400 },

      { id: 'pl4', title: 'Wash basin blockage removal', category: 'Drainage', price: 199, rating: 4.76, reviews: 3400 },
      { id: 'pl5', title: 'Kitchen sink blockage', category: 'Drainage', price: 299, rating: 4.76, reviews: 3400 },
      { id: 'pl6', title: 'Bathroom drain cleaning', category: 'Drainage', price: 249, rating: 4.76, reviews: 3400 },

      { id: 'pl7', title: 'Toilet flush repair', category: 'Toilet', price: 199, rating: 4.76, reviews: 3400 },
      { id: 'pl8', title: 'Toilet seat installation', category: 'Toilet', price: 299, rating: 4.76, reviews: 3400 },
      { id: 'pl9', title: 'Concealed flush tank repair', category: 'Toilet', price: 399, rating: 4.76, reviews: 3400 },

      { id: 'pl10', title: 'Geyser pipe fitting', category: 'Water Heater', price: 249, rating: 4.76, reviews: 3400 },
      { id: 'pl11', title: 'Geyser leakage repair', category: 'Water Heater', price: 299, rating: 4.76, reviews: 3400 },

      { id: 'pl12', title: 'Bathroom pipeline leakage', category: 'Pipelines', price: 349, rating: 4.76, reviews: 3400 },
      { id: 'pl13', title: 'Kitchen pipeline leakage', category: 'Pipelines', price: 299, rating: 4.76, reviews: 3400 },

      { id: 'pl14', title: 'Plumber consultation', category: 'Book A Consultation', price: 99, rating: 4.76, reviews: 3400 },
    ],
    quickServices: [
      { name: 'Tap Repair' },
      { name: 'Drain Cleaning' },
      { name: 'Flush Repair' },
      { name: 'Pipeline Fix' },
    ]
  },
  acrepair: {
    title: 'AC Repair',
    rating: '4.81',
    bookings: '4.6K',
    services: [
      { id: 'ac1', title: 'AC general servicing', category: 'Servicing', price: 399, rating: 4.81, reviews: 4600 },
      { id: 'ac2', title: 'AC deep cleaning', category: 'Servicing', price: 599, rating: 4.81, reviews: 4600 },
      { id: 'ac3', title: 'Split AC servicing', category: 'Servicing', price: 499, rating: 4.81, reviews: 4600 },

      { id: 'ac4', title: 'Gas refill (R32/R410)', category: 'Gas & Cooling', price: 1499, rating: 4.81, reviews: 4600 },
      { id: 'ac5', title: 'Gas leakage fix', category: 'Gas & Cooling', price: 999, rating: 4.81, reviews: 4600 },
      { id: 'ac6', title: 'Cooling problem diagnosis', category: 'Gas & Cooling', price: 299, rating: 4.81, reviews: 4600 },

      { id: 'ac7', title: 'AC installation', category: 'Installation', price: 1299, rating: 4.81, reviews: 4600 },
      { id: 'ac8', title: 'AC uninstallation', category: 'Installation', price: 799, rating: 4.81, reviews: 4600 },
      { id: 'ac9', title: 'Window AC installation', category: 'Installation', price: 999, rating: 4.81, reviews: 4600 },

      { id: 'ac10', title: 'PCB repair', category: 'Repairs', price: 1499, rating: 4.81, reviews: 4600 },
      { id: 'ac11', title: 'Compressor repair', category: 'Repairs', price: 2499, rating: 4.81, reviews: 4600 },
      { id: 'ac12', title: 'Fan motor replacement', category: 'Repairs', price: 1299, rating: 4.81, reviews: 4600 },

      { id: 'ac13', title: 'AC water leakage fix', category: 'Drainage', price: 499, rating: 4.81, reviews: 4600 },
      { id: 'ac14', title: 'Drain pipe cleaning', category: 'Drainage', price: 299, rating: 4.81, reviews: 4600 },

      { id: 'ac15', title: 'AC consultation', category: 'Book A Consultation', price: 149, rating: 4.81, reviews: 4600 },
    ],
    quickServices: [
      { name: 'AC reair' },
      { name: 'Gas Refill' },
      { name: 'Installation' },
      { name: 'Cooling Issue' },
    ]
  },
  cleaning: {
    title: 'Cleaning',
    rating: '4.83',
    bookings: '5.1K',
    services: [
      { id: 'cl1', title: 'Bathroom deep cleaning', category: 'Bathroom Cleaning', price: 499, rating: 4.83, reviews: 5100 },
      { id: 'cl2', title: 'Toilet & tiles cleaning', category: 'Bathroom Cleaning', price: 399, rating: 4.83, reviews: 5100 },
      { id: 'cl3', title: 'Shower area descaling', category: 'Bathroom Cleaning', price: 349, rating: 4.83, reviews: 5100 },

      { id: 'cl4', title: 'Kitchen deep cleaning', category: 'Kitchen Cleaning', price: 699, rating: 4.83, reviews: 5100 },
      { id: 'cl5', title: 'Chimney cleaning', category: 'Kitchen Cleaning', price: 499, rating: 4.83, reviews: 5100 },
      { id: 'cl6', title: 'Gas stove cleaning', category: 'Kitchen Cleaning', price: 299, rating: 4.83, reviews: 5100 },

      { id: 'cl7', title: 'Sofa shampooing (3 seater)', category: 'Living Room Cleaning', price: 799, rating: 4.83, reviews: 5100 },
      { id: 'cl8', title: 'Carpet cleaning', category: 'Living Room Cleaning', price: 599, rating: 4.83, reviews: 5100 },
      { id: 'cl9', title: 'Curtain steam cleaning', category: 'Living Room Cleaning', price: 499, rating: 4.83, reviews: 5100 },

      { id: 'cl10', title: 'Full home cleaning (1 BHK)', category: 'Full Home Cleaning', price: 1499, rating: 4.83, reviews: 5100 },
      { id: 'cl11', title: 'Full home cleaning (2 BHK)', category: 'Full Home Cleaning', price: 1999, rating: 4.83, reviews: 5100 },
      { id: 'cl12', title: 'Full home cleaning (3 BHK)', category: 'Full Home Cleaning', price: 2499, rating: 4.83, reviews: 5100 },

      { id: 'cl13', title: 'Move-in cleaning', category: 'Special Cleaning', price: 2999, rating: 4.83, reviews: 5100 },
      { id: 'cl14', title: 'Move-out cleaning', category: 'Special Cleaning', price: 2999, rating: 4.83, reviews: 5100 },

      { id: 'cl15', title: 'Cleaning consultation', category: 'Book A Consultation', price: 149, rating: 4.83, reviews: 5100 },
    ],
    quickServices: [
      { name: 'Bathroom Clean' },
      { name: 'Kitchen Clean' },
      { name: 'Sofa Shampoo' },
      { name: 'Full Home Clean' },
    ]
  },
  petfeeding: {
    title: 'Pet Feeding',
    rating: '4.81',
    bookings: '3.4K',
    services: [
      { id: 'pf1', title: 'Dog meal feeding', category: 'Dog Feeding', price: 199, rating: 4.81, reviews: 3400 },
      { id: 'pf2', title: 'Puppy feeding', category: 'Dog Feeding', price: 249, rating: 4.81, reviews: 3400 },
      { id: 'pf3', title: 'Senior dog feeding', category: 'Dog Feeding', price: 249, rating: 4.81, reviews: 3400 },

      { id: 'pf4', title: 'Cat meal feeding', category: 'Cat Feeding', price: 179, rating: 4.81, reviews: 3400 },
      { id: 'pf5', title: 'Kitten feeding', category: 'Cat Feeding', price: 229, rating: 4.81, reviews: 3400 },

      { id: 'pf6', title: 'Bird feeding', category: 'Bird Feeding', price: 149, rating: 4.81, reviews: 3400 },
      { id: 'pf7', title: 'Fish tank feeding', category: 'Fish Feeding', price: 149, rating: 4.81, reviews: 3400 },

      { id: 'pf8', title: 'Daily feeding visit', category: 'Regular Care', price: 499, rating: 4.81, reviews: 3400 },
      { id: 'pf9', title: 'Twice a day feeding', category: 'Regular Care', price: 899, rating: 4.81, reviews: 3400 },

      { id: 'pf10', title: 'Pet feeding consultation', category: 'Book A Consultation', price: 149, rating: 4.81, reviews: 3400 },
    ],
    quickServices: [
      { name: 'Dog Feeding' },
      { name: 'Cat Feeding' },
      { name: 'Bird Feeding' },
      { name: 'Daily Visit' },
    ]
  },
  petbreeds: {
    title: 'Pet Breeds',
    rating: '4.79',
    bookings: '2.8K',
    services: [
      { id: 'pb1', title: 'Labrador Retriever', category: 'Dog Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb2', title: 'German Shepherd', category: 'Dog Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb3', title: 'Golden Retriever', category: 'Dog Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb4', title: 'Beagle', category: 'Dog Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb5', title: 'Pug', category: 'Dog Breeds', price: 0, rating: 4.79, reviews: 2800 },

      { id: 'pb6', title: 'Persian Cat', category: 'Cat Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb7', title: 'Maine Coon', category: 'Cat Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb8', title: 'Siamese Cat', category: 'Cat Breeds', price: 0, rating: 4.79, reviews: 2800 },

      { id: 'pb9', title: 'Parrot', category: 'Bird Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb10', title: 'Love Birds', category: 'Bird Breeds', price: 0, rating: 4.79, reviews: 2800 },

      { id: 'pb11', title: 'Goldfish', category: 'Fish Breeds', price: 0, rating: 4.79, reviews: 2800 },
      { id: 'pb12', title: 'Guppy Fish', category: 'Fish Breeds', price: 0, rating: 4.79, reviews: 2800 },

      { id: 'pb13', title: 'Breed consultation', category: 'Book A Consultation', price: 149, rating: 4.79, reviews: 2800 },
    ],
    quickServices: [
      { name: 'Dog Breeds' },
      { name: 'Cat Breeds' },
      { name: 'Bird Breeds' },
      { name: 'Fish Breeds' },
    ]
  }


};

export default function ContractorPage() {
  const params = useParams();
  const normalizeType = (str) =>
 str?.toString().toLowerCase().replace(/-/g, '');


const contractorType = normalizeType(params?.type || 'carpenter');
const data = contractorData[contractorType];


if (!data) {
  return <div className="p-10 text-xl">Service not found</div>;
}


  const [cart, setCart] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const locations = ['Gandhi Path, Jaipur', 'Vaishali Nagar', 'Mansarovar, Jaipur'];

  // Group services by category
  const groupedServices = data.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const addToCart = (service) => {
    setCart(prev => ({
      ...prev,
      [service.id]: {
        id: service.id,
        title: service.title,
        price: service.price,
        quantity: (prev[service.id]?.quantity || 0) + 1
      }
    }));
  };

  const increaseQuantity = (serviceId) => {
    setCart(prev => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        quantity: prev[serviceId].quantity + 1
      }
    }));
  };

  const decreaseQuantity = (serviceId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[serviceId].quantity === 1) {
        delete newCart[serviceId];
      } else {
        newCart[serviceId] = {
          ...newCart[serviceId],
          quantity: newCart[serviceId].quantity - 1
        };
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const getServiceQuantity = (serviceId) => {
    return cart[serviceId]?.quantity || 0;
  };

  return (
    <main className="page-wrapper">
      <div className="navbar-wrapper">
        <nav className="navbar light-navbar">
          <div className="nav-left">
            <img src="/images/logo.png" alt="VisvasaHome" className="logo-img" />
            <Link href="/user/odgri">
              <span className="city-text">Vodgri</span>
            </Link>
          </div>

          <div className="nav-center">
            <select className="location-select">
              {locations.map((loc, idx) => (
                <option key={idx}>{loc}</option>
              ))}
            </select>

            <input
              className="search-input"
              placeholder="Search for 'Electrician'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="nav-right flex items-center mr-3.5">
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <img src="/images/shop.png" alt="Cart" className="w-[23px] h-[23px]" />
            </div>

            <Link href="/login">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer ml-2">
                <img src="/images/user.png" alt="User" className="w-[23px] h-[23px]" />
              </div>
            </Link>
          </div>
        </nav>
      </div>

      <main className="flex justify-center py-5">
        <div className="w-full max-w-[1100px] flex gap-6 px-5 items-start">
          {/* Left Panel */}
          <aside className="w-[260px] sticky top-5">
            <h1 className="text-3xl font-bold mb-1.5">{data.title}</h1>
            <p className="text-gray-600 text-sm mb-4">★ {data.rating} ({data.bookings} Bookings)</p>

            <div className="bg-white rounded-lg p-3.5 shadow-sm">
              <p className="text-xs text-gray-500 mb-2.5 lowercase">select a service</p>
              <div className="grid grid-cols-3 gap-3">
                {data.quickServices.map((service, idx) => (
                  <a key={idx} href="#" className="text-center text-xs text-gray-700 hover:text-blue-600 transition">
                    <div className="w-12 h-12 bg-gray-200 rounded-md mx-auto mb-1.5 flex items-center justify-center text-2xl">
                      🔧
                    </div>
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Services List */}
          <section className="flex-[2] mt-5">
            {Object.entries(groupedServices).map(([category, categoryServices]) => (
              <div key={category} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{category}</h2>

                {categoryServices.map(service => {
                  const quantity = getServiceQuantity(service.id);

                  return (
                    <div key={service.id} className="bg-white rounded-lg p-4 mb-3.5 flex justify-between items-center shadow-sm">
                      <div className="flex-1">
                        <h4 className="text-base font-medium mb-1">{service.title}</h4>
                        <p className="text-xs text-gray-600 mb-1.5">
                          ★ {service.rating} ({(service.reviews / 1000).toFixed(1)}K reviews)
                        </p>
                        <p className="font-semibold text-sm my-1.5">Starts at ₹{service.price}</p>
                        <a href="#" className="text-xs text-purple-600 no-underline">View details</a>
                      </div>

                      <div className="flex flex-col items-center min-w-[140px]">
                        <div className="w-[120px] h-[90px] bg-gray-100 rounded-lg overflow-hidden mb-2 flex items-center justify-center text-4xl">
                          🛠️
                        </div>

                        {quantity === 0 ? (
                          <button
                            onClick={() => addToCart(service)}
                            className="border border-purple-600 text-purple-600 bg-white px-5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-purple-50 transition"
                          >
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center gap-2.5 border border-purple-600 px-3 py-1 rounded-full">
                            <button
                              onClick={() => decreaseQuantity(service.id)}
                              className="bg-transparent border-none text-lg text-purple-600 cursor-pointer"
                            >
                              −
                            </button>
                            <span className="text-sm font-medium">{quantity}</span>
                            <button
                              onClick={() => increaseQuantity(service.id)}
                              className="bg-transparent border-none text-lg text-purple-600 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </section>

          {/* Right Column - Cart */}
          <aside className="w-[320px] sticky top-5 flex flex-col gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Your Cart</h3>

              {Object.keys(cart).length === 0 ? (
                <div className="text-center py-8 text-gray-600">
                  <div className="text-4xl mb-3">🛒</div>
                  <p className="text-sm">No items in your cart</p>
                </div>
              ) : (
                <>
                  <div className="min-h-[100px] mb-3">
                    {Object.values(cart).map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-semibold mb-3">
                      <span>Total</span>
                      <span>₹{getCartTotal()}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white border-none py-2.5 rounded-md text-base cursor-pointer hover:bg-blue-700 transition">
                      Proceed
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
              <div className="flex-1">
                <h4 className="text-base font-semibold mb-2.5">VH Promise</h4>
                <ul className="list-none p-0 m-0">
                  {['Verified Professionals', 'Safe Chemicals', 'Superior Stain Removal'].map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 mb-1.5 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-blue-600 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-5xl">🏠</div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </main>
  );
}