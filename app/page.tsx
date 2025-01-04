// pages/index.tsx
import MobileLayout from "@/app/global/MobileLayout";
import MainButton from "@/app/components/indexPage/MainButton";
import MainImage from "@/app/components/indexPage/MainImage";
import '../global/GNB'
const Home: React.FC = () => {
    return (
        <MobileLayout>
            <MainButton />
            <MainImage />
            <hr />
        </MobileLayout>
    );
};

export default Home;
