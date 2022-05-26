import { Tabs } from 'antd';
import '../css/Projects.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Projects = () => (
  <>
  <h1 className="sectionTitle" id="section4">Our Projects</h1>
  <Tabs defaultActiveKey="1" onChange={callback} className="tabs">
    <TabPane tab="All" key="1">
      <div className="projectContainer">
        <div className="project1">
          <img src="../assets/projects/green-field.jpeg" alt="Nyeri Tea Farm" className="projectImg" loading="eager" />
          <p className="projectText">Nyeri Tea - Kenya</p>

        </div>

        <div className="project2">
          <img src="../assets/projects/grass.jpeg" alt="Naila Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Naila Farm - Malawi </p>

        </div>

        <div className="project3">
          <img src="../assets/projects/maize-tz.jpeg" alt="Maize Farm - Tanzania" className="projectImg" loading="eager"/>
          <p className="projectText">Munda Farm - Tanzania</p>

        </div>

      </div>

      <div className="projectContainer">
        <div className="project1">
          <img src="../assets/projects/farm.jpeg" alt="Rubavu Coffee Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Rubavu Coffee - Rwanda</p>

        </div>

        <div className="project2">
          <img src="../assets/projects/green.jpg" alt="Le Paz" className="projectImg" loading="eager"/>
          <p className="projectText">Le Paz - Mozambique </p>

        </div>

        <div className="project3">
          <img src="../assets/projects/nakuru.jpeg" alt="Nakuru Flower Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Nakuru Flower Farm - Kenya</p>

        </div>

      </div>

      <div className="projectContainer">
        <div className="project1">
          <img src="../assets/projects/tea.jpeg" alt="Kericho Tea Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Kericho Farm - Kenya</p>

        </div>

        <div className="project2">
          <img src="../assets/projects/vineyard.jpeg" alt="West Vinery - Pretoria, South Africa" className="projectImg" loading="eager"/>
          <p className="projectText">West Vinery South Africa </p>

        </div>

        <div className="project3">
          <img src="../assets/projects/field.jpeg" alt="Kerif - Dakar, Senegal" className="projectImg" loading="eager"/>
          <p className="projectText">Kerif Industries Senegal</p>

        </div>

      </div>




    </TabPane>
    <TabPane tab="Popular" key="2">
    <div className="projectContainer">
        <div className="project1">
          <img src="../assets/projects/farm.jpeg" alt="Rubavu Coffee Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Rubavu Coffee - Rwanda</p>

        </div>

        <div className="project2">
          <img src="../assets/projects/grass.jpeg" alt="Naila Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Naila Farm - Malawi </p>

        </div>

        <div className="project3">
          <img src="../assets/projects/field.jpeg" alt="Kerif - Dakar, Senegal" className="projectImg" loading="eager"/>
          <p className="projectText">Kerif Industries Senegal</p>

        </div>

      </div>
    </TabPane>
    <TabPane tab="Latest" key="3">
    <div className="projectContainer">
        <div className="project1">
          <img src="../assets/projects/tea.jpeg" alt="Kericho Tea Farm" className="projectImg" loading="eager"/>
          <p className="projectText">Kericho Farm - Kenya</p>

        </div>

        <div className="project2">
          <img src="../assets/projects/vineyard.jpeg" alt="West Vinery - Pretoria, South Africa" className="projectImg" loading="eager"/>
          <p className="projectText">West Vinery South Africa </p>

        </div>

        <div className="project3">
          <img src="../assets/projects/maize-tz.jpeg" alt="Maize Farm - Tanzania" className="projectImg" loading="eager"/>
          <p className="projectText">Munda Farm - Tanzania</p>

        </div>



      </div>
    </TabPane>
  </Tabs>

  </>
);

export default Projects;