/**
 * 确保映入mongoose的时候已经开启连接了
 */

import mongoose from "mongoose";

import Config from "../config";
import {connect} from "./connect";

connect(Config.dbURL);

export default mongoose;
