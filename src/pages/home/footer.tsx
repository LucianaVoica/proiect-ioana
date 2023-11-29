import React from 'react';

type FooterProps = {
  variant?: 'short' | 'long';
};

const Footer: React.FC<FooterProps> = ({ variant = 'long' }) => {
  return (
    <>
      <div className="mt-auto border-t bg-card px-6 py-2 ">
        <div className="flex flex-col">
          {variant === 'long' && (
            <>
              <div className="mb-12 grid grid-cols-2 text-sm">
                <div className="flex flex-col gap-3">
                  <h6 className="font-bold uppercase tracking-wide">Termeni și condiții</h6>
                  <a
                    className="font-medium tracking-wide text-muted transition hover:text-secondary"
                    target="_blank"
                    href="https://www.fonduri-ue.ro/eula-mysmis2021"
                    rel="noreferrer">
                    Termeni și condiții
                    {/*Aici pune link catre o pagina in care scrii termenii si conditii*/}
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <a
                  href={'https://www.sts.ro/'}
                  target={'_blank'}
                  rel="noreferrer">
                  <img
                    alt="logo_sts"
                    className="h-5 w-5"
                    src="https://cdn.stscloud.ro/assets/logo/sts-200x200.png"
                  />
                </a>
                <p>Sistem informatic dezvoltat de către Student Sg. Maj. Voica Ioana</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 text-xs tracking-wide text-muted md:flex-row">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row flex-wrap items-center justify-between gap-2"></div>
                </div>
              </div>
              <hr className="mb-8 w-full" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
