// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogSyslogd4OverridesettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#certificate LogSyslogd4Overridesetting#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#device_name LogSyslogd4Overridesetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#device_vdom LogSyslogd4Overridesetting#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#dynamic_sort_subtable LogSyslogd4Overridesetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#enc_algorithm LogSyslogd4Overridesetting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#facility LogSyslogd4Overridesetting#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#format LogSyslogd4Overridesetting#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#id LogSyslogd4Overridesetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#interface LogSyslogd4Overridesetting#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#interface_select_method LogSyslogd4Overridesetting#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#max_log_rate LogSyslogd4Overridesetting#max_log_rate}
  */
  readonly maxLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#mode LogSyslogd4Overridesetting#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#override LogSyslogd4Overridesetting#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#port LogSyslogd4Overridesetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#priority LogSyslogd4Overridesetting#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#server LogSyslogd4Overridesetting#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#source_ip LogSyslogd4Overridesetting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#source_ip_interface LogSyslogd4Overridesetting#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#ssl_min_proto_version LogSyslogd4Overridesetting#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#status LogSyslogd4Overridesetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#use_management_vdom LogSyslogd4Overridesetting#use_management_vdom}
  */
  readonly useManagementVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#vrf_select LogSyslogd4Overridesetting#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * custom_field_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#custom_field_name LogSyslogd4Overridesetting#custom_field_name}
  */
  readonly customFieldName?: LogSyslogd4OverridesettingCustomFieldName[] | cdktf.IResolvable;
}
export interface LogSyslogd4OverridesettingCustomFieldName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#custom LogSyslogd4Overridesetting#custom}
  */
  readonly custom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#id LogSyslogd4Overridesetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#name LogSyslogd4Overridesetting#name}
  */
  readonly name?: string;
}

export function logSyslogd4OverridesettingCustomFieldNameToTerraform(struct?: LogSyslogd4OverridesettingCustomFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logSyslogd4OverridesettingCustomFieldNameToHclTerraform(struct?: LogSyslogd4OverridesettingCustomFieldName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSyslogd4OverridesettingCustomFieldNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogSyslogd4OverridesettingCustomFieldName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSyslogd4OverridesettingCustomFieldName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
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
}

export class LogSyslogd4OverridesettingCustomFieldNameList extends cdktf.ComplexList {
  public internalValue? : LogSyslogd4OverridesettingCustomFieldName[] | cdktf.IResolvable

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
  public get(index: number): LogSyslogd4OverridesettingCustomFieldNameOutputReference {
    return new LogSyslogd4OverridesettingCustomFieldNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting fmgdevice_log_syslogd4_overridesetting}
*/
export class LogSyslogd4Overridesetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_syslogd4_overridesetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogSyslogd4Overridesetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogSyslogd4Overridesetting to import
  * @param importFromId The id of the existing LogSyslogd4Overridesetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogSyslogd4Overridesetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_syslogd4_overridesetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_syslogd4_overridesetting fmgdevice_log_syslogd4_overridesetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogSyslogd4OverridesettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogSyslogd4OverridesettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_syslogd4_overridesetting',
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
    this._certificate = config.certificate;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encAlgorithm = config.encAlgorithm;
    this._facility = config.facility;
    this._format = config.format;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._maxLogRate = config.maxLogRate;
    this._mode = config.mode;
    this._override = config.override;
    this._port = config.port;
    this._priority = config.priority;
    this._server = config.server;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._status = config.status;
    this._useManagementVdom = config.useManagementVdom;
    this._vrfSelect = config.vrfSelect;
    this._customFieldName.internalValue = config.customFieldName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate'));
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // max_log_rate - computed: false, optional: true, required: false
  private _maxLogRate?: number; 
  public get maxLogRate() {
    return this.getNumberAttribute('max_log_rate');
  }
  public set maxLogRate(value: number) {
    this._maxLogRate = value;
  }
  public resetMaxLogRate() {
    this._maxLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogRateInput() {
    return this._maxLogRate;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // override - computed: false, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // source_ip - computed: false, optional: true, required: false
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

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
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

  // use_management_vdom - computed: true, optional: true, required: false
  private _useManagementVdom?: string; 
  public get useManagementVdom() {
    return this.getStringAttribute('use_management_vdom');
  }
  public set useManagementVdom(value: string) {
    this._useManagementVdom = value;
  }
  public resetUseManagementVdom() {
    this._useManagementVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagementVdomInput() {
    return this._useManagementVdom;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // custom_field_name - computed: false, optional: true, required: false
  private _customFieldName = new LogSyslogd4OverridesettingCustomFieldNameList(this, "custom_field_name", false);
  public get customFieldName() {
    return this._customFieldName;
  }
  public putCustomFieldName(value: LogSyslogd4OverridesettingCustomFieldName[] | cdktf.IResolvable) {
    this._customFieldName.internalValue = value;
  }
  public resetCustomFieldName() {
    this._customFieldName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldNameInput() {
    return this._customFieldName.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      facility: cdktf.stringToTerraform(this._facility),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      max_log_rate: cdktf.numberToTerraform(this._maxLogRate),
      mode: cdktf.stringToTerraform(this._mode),
      override: cdktf.stringToTerraform(this._override),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.stringToTerraform(this._priority),
      server: cdktf.stringToTerraform(this._server),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpInterface),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      status: cdktf.stringToTerraform(this._status),
      use_management_vdom: cdktf.stringToTerraform(this._useManagementVdom),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      custom_field_name: cdktf.listMapper(logSyslogd4OverridesettingCustomFieldNameToTerraform, true)(this._customFieldName.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_log_rate: {
        value: cdktf.numberToHclTerraform(this._maxLogRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
      source_ip_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_management_vdom: {
        value: cdktf.stringToHclTerraform(this._useManagementVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_field_name: {
        value: cdktf.listMapperHcl(logSyslogd4OverridesettingCustomFieldNameToHclTerraform, true)(this._customFieldName.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogSyslogd4OverridesettingCustomFieldNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
