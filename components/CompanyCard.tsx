type CompanyCardProps = {
  dates: string;
  companyName: string;
  position: string;
};
export const CompanyCard = ({
  dates,
  companyName,
  position,
}: CompanyCardProps) => {
  return (
    <div className="flex flex-col gap-4 text-center mb-4">
      <div className="text-3xl font-bold">{companyName}</div>
      <div className="text-2xl">{position}</div>
      <div className="text-xl">{dates}</div>
    </div>
  );
};
