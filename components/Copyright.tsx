const Copyright = () => {
  return (
    <main>
      <div className="w-full py-8 border-t border-white/20 block lg:hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-white/60 font-mono text-xs text-center leading-relaxed">
            © {new Date().getFullYear()} NIHON. All rights reserved. Any
            attempts to view this on a 2014 Nokia will result in immediate
            judgment from the Sensei.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Copyright;
