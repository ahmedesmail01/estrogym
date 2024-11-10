type Package = {
  id: string;
  name: string;
  original_price: string;
  price_after_discount: string;
  duration: string;
  created_at: Date;
  updated_at: Date;
  description: string;
};

type PackageResponse = {
  id: string;
  user_id: string;
  package_id: string;
  package: Package;
  start_date: string;
  end_date: string;
  updated_at: string;
  created_at: string;
  deleted_at: string | null;
};

type UserPackages = {
  expiredPackages: PackageResponse[];
  currentPackage: PackageResponse;
  upcomingPackages: PackageResponse[];
};
