export default function AuthPagesLayout({ children }) {
  return (
    <div className="w-full bg-lightest my-flex py-16">
      <div className="w-5/12 px-10 py-12 bg-darker rounded-lg shadow-2xl">
        {children}
      </div>
    </div>
  );
}
