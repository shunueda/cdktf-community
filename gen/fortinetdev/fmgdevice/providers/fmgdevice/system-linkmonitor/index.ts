// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLinkmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#addr_mode SystemLinkmonitor#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#class_id SystemLinkmonitor#class_id}
  */
  readonly classId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#device_name SystemLinkmonitor#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#device_vdom SystemLinkmonitor#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#diffservcode SystemLinkmonitor#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#dynamic_sort_subtable SystemLinkmonitor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#fail_weight SystemLinkmonitor#fail_weight}
  */
  readonly failWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#failtime SystemLinkmonitor#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#gateway_ip SystemLinkmonitor#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#gateway_ip6 SystemLinkmonitor#gateway_ip6}
  */
  readonly gatewayIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#http_agent SystemLinkmonitor#http_agent}
  */
  readonly httpAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#http_get SystemLinkmonitor#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#http_match SystemLinkmonitor#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#id SystemLinkmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#interval SystemLinkmonitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#name SystemLinkmonitor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#packet_size SystemLinkmonitor#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#password SystemLinkmonitor#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#port SystemLinkmonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#probe_count SystemLinkmonitor#probe_count}
  */
  readonly probeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#probe_timeout SystemLinkmonitor#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#protocol SystemLinkmonitor#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#recoverytime SystemLinkmonitor#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#route SystemLinkmonitor#route}
  */
  readonly route?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#security_mode SystemLinkmonitor#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#server SystemLinkmonitor#server}
  */
  readonly server?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#server_config SystemLinkmonitor#server_config}
  */
  readonly serverConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#server_type SystemLinkmonitor#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#service_detection SystemLinkmonitor#service_detection}
  */
  readonly serviceDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#source_ip SystemLinkmonitor#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#source_ip6 SystemLinkmonitor#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#srcintf SystemLinkmonitor#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#status SystemLinkmonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#update_cascade_interface SystemLinkmonitor#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#update_policy_route SystemLinkmonitor#update_policy_route}
  */
  readonly updatePolicyRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#update_static_route SystemLinkmonitor#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#server_list SystemLinkmonitor#server_list}
  */
  readonly serverList?: SystemLinkmonitorServerListStruct[] | cdktf.IResolvable;
}
export interface SystemLinkmonitorServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#dst SystemLinkmonitor#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#id SystemLinkmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#port SystemLinkmonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#protocol SystemLinkmonitor#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#weight SystemLinkmonitor#weight}
  */
  readonly weight?: number;
}

export function systemLinkmonitorServerListStructToTerraform(struct?: SystemLinkmonitorServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst: cdktf.stringToTerraform(struct!.dst),
    id: cdktf.numberToTerraform(struct!.id),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function systemLinkmonitorServerListStructToHclTerraform(struct?: SystemLinkmonitorServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLinkmonitorServerListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemLinkmonitorServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLinkmonitorServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst = undefined;
      this._id = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst = value.dst;
      this._id = value.id;
      this._port = value.port;
      this._protocol = value.protocol;
      this._weight = value.weight;
    }
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class SystemLinkmonitorServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystemLinkmonitorServerListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemLinkmonitorServerListStructOutputReference {
    return new SystemLinkmonitorServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor fmgdevice_system_linkmonitor}
*/
export class SystemLinkmonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_linkmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLinkmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLinkmonitor to import
  * @param importFromId The id of the existing SystemLinkmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLinkmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_linkmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_linkmonitor fmgdevice_system_linkmonitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLinkmonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLinkmonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_linkmonitor',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrMode = config.addrMode;
    this._classId = config.classId;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diffservcode = config.diffservcode;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failWeight = config.failWeight;
    this._failtime = config.failtime;
    this._gatewayIp = config.gatewayIp;
    this._gatewayIp6 = config.gatewayIp6;
    this._httpAgent = config.httpAgent;
    this._httpGet = config.httpGet;
    this._httpMatch = config.httpMatch;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._packetSize = config.packetSize;
    this._password = config.password;
    this._port = config.port;
    this._probeCount = config.probeCount;
    this._probeTimeout = config.probeTimeout;
    this._protocol = config.protocol;
    this._recoverytime = config.recoverytime;
    this._route = config.route;
    this._securityMode = config.securityMode;
    this._server = config.server;
    this._serverConfig = config.serverConfig;
    this._serverType = config.serverType;
    this._serviceDetection = config.serviceDetection;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._updateCascadeInterface = config.updateCascadeInterface;
    this._updatePolicyRoute = config.updatePolicyRoute;
    this._updateStaticRoute = config.updateStaticRoute;
    this._serverList.internalValue = config.serverList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string[]; 
  public get classId() {
    return cdktf.Fn.tolist(this.getListAttribute('class_id'));
  }
  public set classId(value: string[]) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fail_weight - computed: false, optional: true, required: false
  private _failWeight?: number; 
  public get failWeight() {
    return this.getNumberAttribute('fail_weight');
  }
  public set failWeight(value: number) {
    this._failWeight = value;
  }
  public resetFailWeight() {
    this._failWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failWeightInput() {
    return this._failWeight;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // gateway_ip - computed: true, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // gateway_ip6 - computed: true, optional: true, required: false
  private _gatewayIp6?: string; 
  public get gatewayIp6() {
    return this.getStringAttribute('gateway_ip6');
  }
  public set gatewayIp6(value: string) {
    this._gatewayIp6 = value;
  }
  public resetGatewayIp6() {
    this._gatewayIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIp6Input() {
    return this._gatewayIp6;
  }

  // http_agent - computed: false, optional: true, required: false
  private _httpAgent?: string; 
  public get httpAgent() {
    return this.getStringAttribute('http_agent');
  }
  public set httpAgent(value: string) {
    this._httpAgent = value;
  }
  public resetHttpAgent() {
    this._httpAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentInput() {
    return this._httpAgent;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packet_size - computed: true, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe_count - computed: true, optional: true, required: false
  private _probeCount?: number; 
  public get probeCount() {
    return this.getNumberAttribute('probe_count');
  }
  public set probeCount(value: number) {
    this._probeCount = value;
  }
  public resetProbeCount() {
    this._probeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeCountInput() {
    return this._probeCount;
  }

  // probe_timeout - computed: true, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // recoverytime - computed: true, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // route - computed: true, optional: true, required: false
  private _route?: string[]; 
  public get route() {
    return cdktf.Fn.tolist(this.getListAttribute('route'));
  }
  public set route(value: string[]) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_config - computed: true, optional: true, required: false
  private _serverConfig?: string; 
  public get serverConfig() {
    return this.getStringAttribute('server_config');
  }
  public set serverConfig(value: string) {
    this._serverConfig = value;
  }
  public resetServerConfig() {
    this._serverConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigInput() {
    return this._serverConfig;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_detection - computed: true, optional: true, required: false
  private _serviceDetection?: string; 
  public get serviceDetection() {
    return this.getStringAttribute('service_detection');
  }
  public set serviceDetection(value: string) {
    this._serviceDetection = value;
  }
  public resetServiceDetection() {
    this._serviceDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDetectionInput() {
    return this._serviceDetection;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_cascade_interface - computed: true, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_policy_route - computed: true, optional: true, required: false
  private _updatePolicyRoute?: string; 
  public get updatePolicyRoute() {
    return this.getStringAttribute('update_policy_route');
  }
  public set updatePolicyRoute(value: string) {
    this._updatePolicyRoute = value;
  }
  public resetUpdatePolicyRoute() {
    this._updatePolicyRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyRouteInput() {
    return this._updatePolicyRoute;
  }

  // update_static_route - computed: true, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemLinkmonitorServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemLinkmonitorServerListStruct[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_mode: cdktf.stringToTerraform(this._addrMode),
      class_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._classId),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diffservcode: cdktf.stringToTerraform(this._diffservcode),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fail_weight: cdktf.numberToTerraform(this._failWeight),
      failtime: cdktf.numberToTerraform(this._failtime),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      gateway_ip6: cdktf.stringToTerraform(this._gatewayIp6),
      http_agent: cdktf.stringToTerraform(this._httpAgent),
      http_get: cdktf.stringToTerraform(this._httpGet),
      http_match: cdktf.stringToTerraform(this._httpMatch),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      packet_size: cdktf.numberToTerraform(this._packetSize),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      port: cdktf.numberToTerraform(this._port),
      probe_count: cdktf.numberToTerraform(this._probeCount),
      probe_timeout: cdktf.numberToTerraform(this._probeTimeout),
      protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocol),
      recoverytime: cdktf.numberToTerraform(this._recoverytime),
      route: cdktf.listMapper(cdktf.stringToTerraform, false)(this._route),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._server),
      server_config: cdktf.stringToTerraform(this._serverConfig),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_detection: cdktf.stringToTerraform(this._serviceDetection),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      update_cascade_interface: cdktf.stringToTerraform(this._updateCascadeInterface),
      update_policy_route: cdktf.stringToTerraform(this._updatePolicyRoute),
      update_static_route: cdktf.stringToTerraform(this._updateStaticRoute),
      server_list: cdktf.listMapper(systemLinkmonitorServerListStructToTerraform, true)(this._serverList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_mode: {
        value: cdktf.stringToHclTerraform(this._addrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._classId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode: {
        value: cdktf.stringToHclTerraform(this._diffservcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_weight: {
        value: cdktf.numberToHclTerraform(this._failWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failtime: {
        value: cdktf.numberToHclTerraform(this._failtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip6: {
        value: cdktf.stringToHclTerraform(this._gatewayIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_agent: {
        value: cdktf.stringToHclTerraform(this._httpAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_get: {
        value: cdktf.stringToHclTerraform(this._httpGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_match: {
        value: cdktf.stringToHclTerraform(this._httpMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_size: {
        value: cdktf.numberToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_count: {
        value: cdktf.numberToHclTerraform(this._probeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe_timeout: {
        value: cdktf.numberToHclTerraform(this._probeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      recoverytime: {
        value: cdktf.numberToHclTerraform(this._recoverytime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._route),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._server),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_config: {
        value: cdktf.stringToHclTerraform(this._serverConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_detection: {
        value: cdktf.stringToHclTerraform(this._serviceDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_cascade_interface: {
        value: cdktf.stringToHclTerraform(this._updateCascadeInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_policy_route: {
        value: cdktf.stringToHclTerraform(this._updatePolicyRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_static_route: {
        value: cdktf.stringToHclTerraform(this._updateStaticRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_list: {
        value: cdktf.listMapperHcl(systemLinkmonitorServerListStructToHclTerraform, true)(this._serverList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLinkmonitorServerListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
