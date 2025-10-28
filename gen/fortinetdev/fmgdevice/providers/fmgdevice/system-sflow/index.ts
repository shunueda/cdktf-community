// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#collector_ip SystemSflow#collector_ip}
  */
  readonly collectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#collector_port SystemSflow#collector_port}
  */
  readonly collectorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#device_name SystemSflow#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#dynamic_sort_subtable SystemSflow#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#id SystemSflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#interface SystemSflow#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#interface_select_method SystemSflow#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#source_ip SystemSflow#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * collectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#collectors SystemSflow#collectors}
  */
  readonly collectors?: SystemSflowCollectors[] | cdktf.IResolvable;
}
export interface SystemSflowCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#collector_ip SystemSflow#collector_ip}
  */
  readonly collectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#collector_port SystemSflow#collector_port}
  */
  readonly collectorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#id SystemSflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#interface SystemSflow#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#interface_select_method SystemSflow#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#source_ip SystemSflow#source_ip}
  */
  readonly sourceIp?: string;
}

export function systemSflowCollectorsToTerraform(struct?: SystemSflowCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_ip: cdktf.stringToTerraform(struct!.collectorIp),
    collector_port: cdktf.numberToTerraform(struct!.collectorPort),
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    interface_select_method: cdktf.stringToTerraform(struct!.interfaceSelectMethod),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function systemSflowCollectorsToHclTerraform(struct?: SystemSflowCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_ip: {
      value: cdktf.stringToHclTerraform(struct!.collectorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_port: {
      value: cdktf.numberToHclTerraform(struct!.collectorPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSflowCollectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSflowCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorIp = this._collectorIp;
    }
    if (this._collectorPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorPort = this._collectorPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSelectMethod = this._interfaceSelectMethod;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSflowCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorIp = undefined;
      this._collectorPort = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._interfaceSelectMethod = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorIp = value.collectorIp;
      this._collectorPort = value.collectorPort;
      this._id = value.id;
      this._interface = value.interface;
      this._interfaceSelectMethod = value.interfaceSelectMethod;
      this._sourceIp = value.sourceIp;
    }
  }

  // collector_ip - computed: true, optional: true, required: false
  private _collectorIp?: string; 
  public get collectorIp() {
    return this.getStringAttribute('collector_ip');
  }
  public set collectorIp(value: string) {
    this._collectorIp = value;
  }
  public resetCollectorIp() {
    this._collectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIpInput() {
    return this._collectorIp;
  }

  // collector_port - computed: true, optional: true, required: false
  private _collectorPort?: number; 
  public get collectorPort() {
    return this.getNumberAttribute('collector_port');
  }
  public set collectorPort(value: number) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
  }

  // id - computed: true, optional: true, required: false
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
}

export class SystemSflowCollectorsList extends cdktf.ComplexList {
  public internalValue? : SystemSflowCollectors[] | cdktf.IResolvable

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
  public get(index: number): SystemSflowCollectorsOutputReference {
    return new SystemSflowCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow fmgdevice_system_sflow}
*/
export class SystemSflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSflow to import
  * @param importFromId The id of the existing SystemSflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sflow fmgdevice_system_sflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sflow',
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
    this._collectorIp = config.collectorIp;
    this._collectorPort = config.collectorPort;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._sourceIp = config.sourceIp;
    this._collectors.internalValue = config.collectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_ip - computed: true, optional: true, required: false
  private _collectorIp?: string; 
  public get collectorIp() {
    return this.getStringAttribute('collector_ip');
  }
  public set collectorIp(value: string) {
    this._collectorIp = value;
  }
  public resetCollectorIp() {
    this._collectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIpInput() {
    return this._collectorIp;
  }

  // collector_port - computed: true, optional: true, required: false
  private _collectorPort?: number; 
  public get collectorPort() {
    return this.getNumberAttribute('collector_port');
  }
  public set collectorPort(value: number) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
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

  // collectors - computed: false, optional: true, required: false
  private _collectors = new SystemSflowCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: SystemSflowCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_ip: cdktf.stringToTerraform(this._collectorIp),
      collector_port: cdktf.numberToTerraform(this._collectorPort),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      collectors: cdktf.listMapper(systemSflowCollectorsToTerraform, true)(this._collectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_ip: {
        value: cdktf.stringToHclTerraform(this._collectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_port: {
        value: cdktf.numberToHclTerraform(this._collectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collectors: {
        value: cdktf.listMapperHcl(systemSflowCollectorsToHclTerraform, true)(this._collectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSflowCollectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
