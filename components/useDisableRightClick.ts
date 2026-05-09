import { useEffect } from 'react';

const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};

export default useDisableRightClick;
