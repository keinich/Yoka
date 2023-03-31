import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import BoardColumn from "@/components/BoardColumn";
import {
  PlusCircleIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { LocalDataService } from "@/services/LocalDataService";
import { data } from "autoprefixer";
import { DragDropContext } from "react-beautiful-dnd";
import Layout from "@/components/Layout";
import TaskManager from "@/components/TaskManager";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  return <TaskManager projectId={projectId}></TaskManager>
}

Project.getLayout = function getLayout(page) {
  return <Layout page={`projects`}>{page}</Layout>;
};
