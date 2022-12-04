import type { InjectionKey } from "vue";

/**
 * 全局标题
 */
export const TITLE: string = "学生选课系统";

/**
 * axios-baseUrl
 */
export const API_URL: string = `http://powcai.top:8000/api`; // 开发环境
// export const API_URL: string = `http://8.136.82.204:8000/api`; // 线上环境
/**
 * axios-timeOut
 */
export const TIME_OUT: number = 15000;

/**
 * 全局页面信息的key
 */
// export const pageKey: InjectionKey<pageType> = Symbol();
