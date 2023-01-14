import stylesMain from './Main.module.css';

interface MainProps {
  children: any;
}

export function Main({ children }: MainProps): JSX.Element {
  return (
    <main className={stylesMain.main}>
      <div className={stylesMain.container}>
        {children}
      </div>
    </main>
  );
}
