// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDeviceInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * id path parameter. Interface ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#id DataDnacenterDeviceInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lastInputTime query parameter. Last Input Time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#last_input_time DataDnacenterDeviceInterface#last_input_time}
  */
  readonly lastInputTime?: string;
  /**
  * lastOutputTime query parameter. Last Output Time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#last_output_time DataDnacenterDeviceInterface#last_output_time}
  */
  readonly lastOutputTime?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#limit DataDnacenterDeviceInterface#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#offset DataDnacenterDeviceInterface#offset}
  */
  readonly offset?: number;
}
export interface DataDnacenterDeviceInterfaceItem {
}

export function dataDnacenterDeviceInterfaceItemToTerraform(struct?: DataDnacenterDeviceInterfaceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceInterfaceItemToHclTerraform(struct?: DataDnacenterDeviceInterfaceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceInterfaceItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterDeviceInterfaceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceInterfaceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // class_name - computed: true, optional: false, required: false
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_index - computed: true, optional: false, required: false
  public get ifIndex() {
    return this.getStringAttribute('if_index');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask - computed: true, optional: false, required: false
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }

  // isis_support - computed: true, optional: false, required: false
  public get isisSupport() {
    return this.getStringAttribute('isis_support');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mapped_physical_interface_id - computed: true, optional: false, required: false
  public get mappedPhysicalInterfaceId() {
    return this.getStringAttribute('mapped_physical_interface_id');
  }

  // mapped_physical_interface_name - computed: true, optional: false, required: false
  public get mappedPhysicalInterfaceName() {
    return this.getStringAttribute('mapped_physical_interface_name');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // native_vlan_id - computed: true, optional: false, required: false
  public get nativeVlanId() {
    return this.getStringAttribute('native_vlan_id');
  }

  // ospf_support - computed: true, optional: false, required: false
  public get ospfSupport() {
    return this.getStringAttribute('ospf_support');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getStringAttribute('pid');
  }

  // port_mode - computed: true, optional: false, required: false
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // serial_no - computed: true, optional: false, required: false
  public get serialNo() {
    return this.getStringAttribute('serial_no');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getStringAttribute('series');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getStringAttribute('voice_vlan');
  }
}

export class DataDnacenterDeviceInterfaceItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceInterfaceItemOutputReference {
    return new DataDnacenterDeviceInterfaceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterDeviceInterfaceItems {
}

export function dataDnacenterDeviceInterfaceItemsToTerraform(struct?: DataDnacenterDeviceInterfaceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceInterfaceItemsToHclTerraform(struct?: DataDnacenterDeviceInterfaceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceInterfaceItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterDeviceInterfaceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceInterfaceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // class_name - computed: true, optional: false, required: false
  public get className() {
    return this.getStringAttribute('class_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_index - computed: true, optional: false, required: false
  public get ifIndex() {
    return this.getStringAttribute('if_index');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_mask - computed: true, optional: false, required: false
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }

  // isis_support - computed: true, optional: false, required: false
  public get isisSupport() {
    return this.getStringAttribute('isis_support');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mapped_physical_interface_id - computed: true, optional: false, required: false
  public get mappedPhysicalInterfaceId() {
    return this.getStringAttribute('mapped_physical_interface_id');
  }

  // mapped_physical_interface_name - computed: true, optional: false, required: false
  public get mappedPhysicalInterfaceName() {
    return this.getStringAttribute('mapped_physical_interface_name');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // native_vlan_id - computed: true, optional: false, required: false
  public get nativeVlanId() {
    return this.getStringAttribute('native_vlan_id');
  }

  // ospf_support - computed: true, optional: false, required: false
  public get ospfSupport() {
    return this.getStringAttribute('ospf_support');
  }

  // pid - computed: true, optional: false, required: false
  public get pid() {
    return this.getStringAttribute('pid');
  }

  // port_mode - computed: true, optional: false, required: false
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // serial_no - computed: true, optional: false, required: false
  public get serialNo() {
    return this.getStringAttribute('serial_no');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getStringAttribute('series');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getStringAttribute('voice_vlan');
  }
}

export class DataDnacenterDeviceInterfaceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceInterfaceItemsOutputReference {
    return new DataDnacenterDeviceInterfaceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface dnacenter_device_interface}
*/
export class DataDnacenterDeviceInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDeviceInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDeviceInterface to import
  * @param importFromId The id of the existing DataDnacenterDeviceInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDeviceInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_interface dnacenter_device_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDeviceInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDeviceInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_interface',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lastInputTime = config.lastInputTime;
    this._lastOutputTime = config.lastOutputTime;
    this._limit = config.limit;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterDeviceInterfaceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterDeviceInterfaceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // last_input_time - computed: false, optional: true, required: false
  private _lastInputTime?: string; 
  public get lastInputTime() {
    return this.getStringAttribute('last_input_time');
  }
  public set lastInputTime(value: string) {
    this._lastInputTime = value;
  }
  public resetLastInputTime() {
    this._lastInputTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInputTimeInput() {
    return this._lastInputTime;
  }

  // last_output_time - computed: false, optional: true, required: false
  private _lastOutputTime?: string; 
  public get lastOutputTime() {
    return this.getStringAttribute('last_output_time');
  }
  public set lastOutputTime(value: string) {
    this._lastOutputTime = value;
  }
  public resetLastOutputTime() {
    this._lastOutputTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastOutputTimeInput() {
    return this._lastOutputTime;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_input_time: cdktf.stringToTerraform(this._lastInputTime),
      last_output_time: cdktf.stringToTerraform(this._lastOutputTime),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_input_time: {
        value: cdktf.stringToHclTerraform(this._lastInputTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_output_time: {
        value: cdktf.stringToHclTerraform(this._lastOutputTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
