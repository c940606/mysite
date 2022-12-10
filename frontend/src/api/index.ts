import { get, post, put, del } from "@/request";
import { SearchType } from "./model";

/**
 * 测试权限接口
 */
export const check_test = (): Promise<any> => get("/hello");

/**
 * 添加待办
 */
export const search_content = (data: SearchType): Promise<any> =>
  post(`/search`, { ...data });
