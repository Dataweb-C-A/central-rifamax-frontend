import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import 'dayjs/locale/es';
import './index.css';

import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@config/store/index';
import { BrowserRouter } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';
import { ThemeProvider } from '@config/ThemeProvider'
import { Notifications } from '@mantine/notifications';
import { ProfileProvider } from '@config/ProfileProvider'
import { DatesProvider } from '@mantine/dates';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            <ProfileProvider retry={1}>
              <DatesProvider settings={{ locale: 'es', firstDayOfWeek: 0, weekendDays: [0], timezone: 'America/Caracas' }}>
                <ModalsProvider>
                  <Notifications />
                  <App />
                </ModalsProvider>
              </DatesProvider>
            </ProfileProvider>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
