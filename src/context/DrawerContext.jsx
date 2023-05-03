import { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return (
        <DrawerContext.Provider value={[isOpenSidebar, setIsOpenSidebar]}>
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerProvider;
