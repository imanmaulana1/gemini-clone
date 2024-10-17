import {
  HeaderMainContent,
  BodyMainContent,
  FooterMainContent,
} from '../../components';

const Main = () => {
  return (
    <main className='min-h-screen flex-1 relative'>
      <HeaderMainContent />
      <BodyMainContent />
      <FooterMainContent />
    </main>
  );
};

export default Main;
