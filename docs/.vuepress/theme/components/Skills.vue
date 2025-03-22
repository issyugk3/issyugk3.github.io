<script setup lang="ts">
import * as skills from "./skills"


const FrontEnd = skills.FrontEnd
const BackEnd = skills.BackEnd
const Certifications = skills.Certifications
const Languages = skills.Languages
const ProgramLan = skills.ProgramLan
const DML = skills.DML
const otherTech = skills.otherTech
const Hobbies = skills.Hobbies
</script>

<template>
  <div class="skills-container">
    <div class="skills-box">
      <CardMasonry>
        <Card title="Languages" icon="ix:language">
            <div class="content">
            <div class="item" v-for="(lan, index) in Languages" :key="index">
                <Icon :name="`${lan.icon}`" />
                <p><strong>{{ lan.name }}</strong></p>
            </div>
          </div>

        </Card>
        <Card title="Front-End" icon="icon-park:page-template">
          <div class="content">
            <div class="item" v-for="(skill, index) in FrontEnd" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>

        <Card title="Back-End" icon="icon-park:network-tree">
            <div class="content">
            <div class="item" v-for="(skill, index) in BackEnd" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>

        </Card>

        <Card title="Data Analysis & Machine Learning" icon="fluent-color:data-line-20">
            <div class="content">
            <div class="item" v-for="(skill, index) in DML" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>

        <Card title="Programming Languages" icon="logos:visual-studio-code">
            <div class="content">
            <div class="item" v-for="(skill, index) in ProgramLan" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>

        
        <Card title="Other Techs" icon="devicon:powershell">
            <div class="content">
            <div class="item" v-for="(skill, index) in otherTech" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>
        <Card title="Certifications" icon="fluent-color:certificate-16">
            <div class="content">
            <div class="item" v-for="(skill, index) in Certifications" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>
        <Card title="Hobbies" icon="token-branded:fun">
            <div class="content">
            <div class="item" v-for="(skill, index) in Hobbies" :key="index">
                <Icon :name="`${skill.icon}`" />
                <p><strong>{{ skill.name }}</strong></p>
            </div>
          </div>
        </Card>
      </CardMasonry>
    </div>
  </div>
</template>

<style scoped>

.skills-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills-box {
  width: 95%;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.item p {
  margin: 0;
}
</style>
