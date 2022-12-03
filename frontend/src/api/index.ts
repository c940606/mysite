import { get, post, put, del } from "@/request";


/**
 * 测试权限接口
 */
 export const check_test = (): Promise<any> => get("/hello");