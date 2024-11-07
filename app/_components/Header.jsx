const Header = () => {
  return (
    <div className="border z-50 fixed font-medium bg-white w-[800px] m-4 rounded-lg py-2 px-2 flex items-center gap-4 text-sm">
      <p className="bg-green-500 text-white py-2 px-4 font-bold rounded-lg">
        Citeo
      </p>
      <p>Work</p>
      <p>Blogs</p>
      <p>FAQs</p>
      <div className="ml-auto">
        <p className="bg-black text-white py-2 px-4 rounded-lg">Message</p>
      </div>
    </div>
  );
};
export default Header;
