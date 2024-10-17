import {
  HeaderMainContent,
  BodyMainContent,
  FooterMainContent,
} from '../../components';

const Main = () => {
  return (
    <main className='min-h-screen flex-1 relative bg-white dark:bg-darkmode transition-all duration-300 ease'>
      <HeaderMainContent />
      <BodyMainContent />
      <FooterMainContent />
    </main>
  );
};

export default Main;
