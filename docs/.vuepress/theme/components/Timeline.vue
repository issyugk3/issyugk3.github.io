<script setup lang="ts">
import { ref } from "vue";
import { ElTimeline, ElTimelineItem, ElCard } from "element-plus";
import "element-plus/dist/index.css";
import "../styles/timeline.css"
import * as timelineData from "./timeline"
const educationTimeline = timelineData.educationTimeline
const jobTimeline = timelineData.jobTimeline
const typeColors = timelineData.typeColors

</script>

<template>
    <div class="timeline-container">
        <div class="timeline-card">
            <CardGrid>
                <Card title="Education" icon="twemoji:books">
                <el-timeline style="max-width: 600px">
                    <el-timeline-item
                    v-for="(item, index) in educationTimeline"
                    :key="index"
                    :timestamp="item.date"
                    placement="top"
                    :style="{ '--node-color': typeColors[item.type] }"
                    >
                    <el-card>
                        <p><strong>{{ item.detail }}</strong></p>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
                </Card>

                <Card title="Job & Internship" icon="twemoji:laptop-computer">
                <el-timeline style="max-width: 600px">
                    <el-timeline-item
                    v-for="(item, index) in jobTimeline"
                    :key="index"
                    :timestamp="item.date"
                    placement="top"
                    :style="{ '--node-color': typeColors[item.type] }"
                    >
                    <el-card>
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.detail }}</p>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
                </Card>
            </CardGrid>
        </div>
    </div>

</template>

<style scoped>
.timline-container{
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
}
.timeline-card{
    width: 95%;
    margin: 0 auto; 
}

:deep(.el-timeline-item__timestamp) {
  color: var(--c-text);  
}

:deep(.el-timeline-item) {
  --el-timeline-node-size: 12px;
  --el-timeline-node-color:var(--c-text); 
  --el-timeline-node-border-width: 2px;
}

:deep(.el-timeline-item__node) {
    background-color: var(--node-color, #f5ff66) !important; 
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

:deep(.el-timeline-item__dot) {
  display: none !important;
}

:deep(.el-card) {
background-color: var(--c-card-bg, white);  
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--el-box-shadow-light);
}

:deep(.el-timeline-item__tail) {
  background-color: var(--el-border-color-light) !important;
  width: 2px;
}

:deep(.el-timeline) {
  list-style-type: none;  
  margin: 0;
  padding: 0;
}


</style>
