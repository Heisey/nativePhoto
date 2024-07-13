import * as React from 'react';
import * as Axios from 'axios';
import * as Core from 'core';
import config from 'core/src/config//mergedConfig.json'
// import j from 'core/src/config'
interface AxiosContextType {
  axiosInstance: Axios.AxiosInstance;
}

const AxiosContext = React.createContext<AxiosContextType | undefined>(undefined);

export interface ApiProviderProps extends React.PropsWithChildren {
  firebaseAuthInstance: any;
}

export const Provider: React.FC<ApiProviderProps> = (props) => {
  // Create Axios instance with interceptors
  const axiosInstance = React.useMemo(() => {
    const instance = Axios.default.create({
      baseURL: config.urls.server,
    });

    instance.interceptors.request.use(async (config) => {
      if (!props.firebaseAuthInstance.currentUser) {
        delete config.headers.Authorization;
        return config;
      }
      const tokenRes = await props.firebaseAuthInstance.currentUser?.getIdTokenResult();
      if (tokenRes?.token) config.headers.Authorization = `Bearer ${tokenRes.token}`;
      else delete config.headers.Authorization;
      return config;
    });

    return instance;
  }, [props.firebaseAuthInstance]);

  const contextValue = React.useMemo(() => ({ axiosInstance }), [axiosInstance]);

  return (
    <AxiosContext.Provider value={contextValue}>
      {props.children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = React.useContext(AxiosContext);
  if (!context) {
    throw new Error('useAxios must be used within an ApiProvider');
  }
  return context.axiosInstance;
};
