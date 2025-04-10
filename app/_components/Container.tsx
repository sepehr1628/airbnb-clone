interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = function ({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
