import React from 'react';

interface PageProps {
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = (props) => {
  return (
    <div className="min-h-[90vh] max-w-full overflow-hidden bg-background p-2 sm:px-4 sm:py-4">
      <div className="mb-6 max-w-full overflow-hidden">{props.children}</div>
    </div>
  );
};
