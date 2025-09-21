type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex-grow">
      <div className="max-w-screen-lg mx-auto px-6">{children}</div>
    </div>
  );
}
