// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcnmNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#arp_supp_flag DataDcnmNetwork#arp_supp_flag}
  */
  readonly arpSuppFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#deploy DataDcnmNetwork#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#description DataDcnmNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#dhcp_1 DataDcnmNetwork#dhcp_1}
  */
  readonly dhcp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#dhcp_2 DataDcnmNetwork#dhcp_2}
  */
  readonly dhcp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#dhcp_vrf DataDcnmNetwork#dhcp_vrf}
  */
  readonly dhcpVrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#display_name DataDcnmNetwork#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#extension_template DataDcnmNetwork#extension_template}
  */
  readonly extensionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#fabric_name DataDcnmNetwork#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#id DataDcnmNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#ipv4_gateway DataDcnmNetwork#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#ipv6_gateway DataDcnmNetwork#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#ir_enable_flag DataDcnmNetwork#ir_enable_flag}
  */
  readonly irEnableFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#l2_only_flag DataDcnmNetwork#l2_only_flag}
  */
  readonly l2OnlyFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#l3_gateway_flag DataDcnmNetwork#l3_gateway_flag}
  */
  readonly l3GatewayFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#loopback_id DataDcnmNetwork#loopback_id}
  */
  readonly loopbackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#mcast_group DataDcnmNetwork#mcast_group}
  */
  readonly mcastGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#mtu DataDcnmNetwork#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#name DataDcnmNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#network_id DataDcnmNetwork#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#rt_both_flag DataDcnmNetwork#rt_both_flag}
  */
  readonly rtBothFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#secondary_gw_1 DataDcnmNetwork#secondary_gw_1}
  */
  readonly secondaryGw1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#secondary_gw_2 DataDcnmNetwork#secondary_gw_2}
  */
  readonly secondaryGw2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#service_template DataDcnmNetwork#service_template}
  */
  readonly serviceTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#source DataDcnmNetwork#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#tag DataDcnmNetwork#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#template DataDcnmNetwork#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#trm_enable_flag DataDcnmNetwork#trm_enable_flag}
  */
  readonly trmEnableFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#vlan_id DataDcnmNetwork#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#vlan_name DataDcnmNetwork#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#vrf_name DataDcnmNetwork#vrf_name}
  */
  readonly vrfName?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#attachments DataDcnmNetwork#attachments}
  */
  readonly attachments?: DataDcnmNetworkAttachments[] | cdktf.IResolvable;
}
export interface DataDcnmNetworkAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#attach DataDcnmNetwork#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#dot1_qvlan DataDcnmNetwork#dot1_qvlan}
  */
  readonly dot1Qvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#extension_values DataDcnmNetwork#extension_values}
  */
  readonly extensionValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#free_form_config DataDcnmNetwork#free_form_config}
  */
  readonly freeFormConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#instance_values DataDcnmNetwork#instance_values}
  */
  readonly instanceValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#serial_number DataDcnmNetwork#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#switch_ports DataDcnmNetwork#switch_ports}
  */
  readonly switchPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#untagged DataDcnmNetwork#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#vlan_id DataDcnmNetwork#vlan_id}
  */
  readonly vlanId?: number;
}

export function dataDcnmNetworkAttachmentsToTerraform(struct?: DataDcnmNetworkAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach: cdktf.booleanToTerraform(struct!.attach),
    dot1_qvlan: cdktf.numberToTerraform(struct!.dot1Qvlan),
    extension_values: cdktf.stringToTerraform(struct!.extensionValues),
    free_form_config: cdktf.stringToTerraform(struct!.freeFormConfig),
    instance_values: cdktf.stringToTerraform(struct!.instanceValues),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    switch_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchPorts),
    untagged: cdktf.booleanToTerraform(struct!.untagged),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function dataDcnmNetworkAttachmentsToHclTerraform(struct?: DataDcnmNetworkAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach: {
      value: cdktf.booleanToHclTerraform(struct!.attach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dot1_qvlan: {
      value: cdktf.numberToHclTerraform(struct!.dot1Qvlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extension_values: {
      value: cdktf.stringToHclTerraform(struct!.extensionValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    free_form_config: {
      value: cdktf.stringToHclTerraform(struct!.freeFormConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_values: {
      value: cdktf.stringToHclTerraform(struct!.instanceValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    untagged: {
      value: cdktf.booleanToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDcnmNetworkAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDcnmNetworkAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attach !== undefined) {
      hasAnyValues = true;
      internalValueResult.attach = this._attach;
    }
    if (this._dot1Qvlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1Qvlan = this._dot1Qvlan;
    }
    if (this._extensionValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionValues = this._extensionValues;
    }
    if (this._freeFormConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormConfig = this._freeFormConfig;
    }
    if (this._instanceValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceValues = this._instanceValues;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._switchPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPorts = this._switchPorts;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDcnmNetworkAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attach = undefined;
      this._dot1Qvlan = undefined;
      this._extensionValues = undefined;
      this._freeFormConfig = undefined;
      this._instanceValues = undefined;
      this._serialNumber = undefined;
      this._switchPorts = undefined;
      this._untagged = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attach = value.attach;
      this._dot1Qvlan = value.dot1Qvlan;
      this._extensionValues = value.extensionValues;
      this._freeFormConfig = value.freeFormConfig;
      this._instanceValues = value.instanceValues;
      this._serialNumber = value.serialNumber;
      this._switchPorts = value.switchPorts;
      this._untagged = value.untagged;
      this._vlanId = value.vlanId;
    }
  }

  // attach - computed: true, optional: true, required: false
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
  }

  // dot1_qvlan - computed: true, optional: true, required: false
  private _dot1Qvlan?: number; 
  public get dot1Qvlan() {
    return this.getNumberAttribute('dot1_qvlan');
  }
  public set dot1Qvlan(value: number) {
    this._dot1Qvlan = value;
  }
  public resetDot1Qvlan() {
    this._dot1Qvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1QvlanInput() {
    return this._dot1Qvlan;
  }

  // extension_values - computed: true, optional: true, required: false
  private _extensionValues?: string; 
  public get extensionValues() {
    return this.getStringAttribute('extension_values');
  }
  public set extensionValues(value: string) {
    this._extensionValues = value;
  }
  public resetExtensionValues() {
    this._extensionValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionValuesInput() {
    return this._extensionValues;
  }

  // free_form_config - computed: true, optional: true, required: false
  private _freeFormConfig?: string; 
  public get freeFormConfig() {
    return this.getStringAttribute('free_form_config');
  }
  public set freeFormConfig(value: string) {
    this._freeFormConfig = value;
  }
  public resetFreeFormConfig() {
    this._freeFormConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormConfigInput() {
    return this._freeFormConfig;
  }

  // instance_values - computed: true, optional: true, required: false
  private _instanceValues?: string; 
  public get instanceValues() {
    return this.getStringAttribute('instance_values');
  }
  public set instanceValues(value: string) {
    this._instanceValues = value;
  }
  public resetInstanceValues() {
    this._instanceValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceValuesInput() {
    return this._instanceValues;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // switch_ports - computed: true, optional: true, required: false
  private _switchPorts?: string[]; 
  public get switchPorts() {
    return this.getListAttribute('switch_ports');
  }
  public set switchPorts(value: string[]) {
    this._switchPorts = value;
  }
  public resetSwitchPorts() {
    this._switchPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortsInput() {
    return this._switchPorts;
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DataDcnmNetworkAttachmentsList extends cdktf.ComplexList {
  public internalValue? : DataDcnmNetworkAttachments[] | cdktf.IResolvable

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
  public get(index: number): DataDcnmNetworkAttachmentsOutputReference {
    return new DataDcnmNetworkAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network dcnm_network}
*/
export class DataDcnmNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcnmNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcnmNetwork to import
  * @param importFromId The id of the existing DataDcnmNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcnmNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/network dcnm_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcnmNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcnmNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_network',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpSuppFlag = config.arpSuppFlag;
    this._deploy = config.deploy;
    this._description = config.description;
    this._dhcp1 = config.dhcp1;
    this._dhcp2 = config.dhcp2;
    this._dhcpVrf = config.dhcpVrf;
    this._displayName = config.displayName;
    this._extensionTemplate = config.extensionTemplate;
    this._fabricName = config.fabricName;
    this._id = config.id;
    this._ipv4Gateway = config.ipv4Gateway;
    this._ipv6Gateway = config.ipv6Gateway;
    this._irEnableFlag = config.irEnableFlag;
    this._l2OnlyFlag = config.l2OnlyFlag;
    this._l3GatewayFlag = config.l3GatewayFlag;
    this._loopbackId = config.loopbackId;
    this._mcastGroup = config.mcastGroup;
    this._mtu = config.mtu;
    this._name = config.name;
    this._networkId = config.networkId;
    this._rtBothFlag = config.rtBothFlag;
    this._secondaryGw1 = config.secondaryGw1;
    this._secondaryGw2 = config.secondaryGw2;
    this._serviceTemplate = config.serviceTemplate;
    this._source = config.source;
    this._tag = config.tag;
    this._template = config.template;
    this._trmEnableFlag = config.trmEnableFlag;
    this._vlanId = config.vlanId;
    this._vlanName = config.vlanName;
    this._vrfName = config.vrfName;
    this._attachments.internalValue = config.attachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_supp_flag - computed: true, optional: true, required: false
  private _arpSuppFlag?: boolean | cdktf.IResolvable; 
  public get arpSuppFlag() {
    return this.getBooleanAttribute('arp_supp_flag');
  }
  public set arpSuppFlag(value: boolean | cdktf.IResolvable) {
    this._arpSuppFlag = value;
  }
  public resetArpSuppFlag() {
    this._arpSuppFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSuppFlagInput() {
    return this._arpSuppFlag;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_1 - computed: true, optional: true, required: false
  private _dhcp1?: string; 
  public get dhcp1() {
    return this.getStringAttribute('dhcp_1');
  }
  public set dhcp1(value: string) {
    this._dhcp1 = value;
  }
  public resetDhcp1() {
    this._dhcp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp1Input() {
    return this._dhcp1;
  }

  // dhcp_2 - computed: true, optional: true, required: false
  private _dhcp2?: string; 
  public get dhcp2() {
    return this.getStringAttribute('dhcp_2');
  }
  public set dhcp2(value: string) {
    this._dhcp2 = value;
  }
  public resetDhcp2() {
    this._dhcp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp2Input() {
    return this._dhcp2;
  }

  // dhcp_vrf - computed: true, optional: true, required: false
  private _dhcpVrf?: string; 
  public get dhcpVrf() {
    return this.getStringAttribute('dhcp_vrf');
  }
  public set dhcpVrf(value: string) {
    this._dhcpVrf = value;
  }
  public resetDhcpVrf() {
    this._dhcpVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpVrfInput() {
    return this._dhcpVrf;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // extension_template - computed: true, optional: true, required: false
  private _extensionTemplate?: string; 
  public get extensionTemplate() {
    return this.getStringAttribute('extension_template');
  }
  public set extensionTemplate(value: string) {
    this._extensionTemplate = value;
  }
  public resetExtensionTemplate() {
    this._extensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTemplateInput() {
    return this._extensionTemplate;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
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

  // ipv4_gateway - computed: true, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv6_gateway - computed: true, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // ir_enable_flag - computed: true, optional: true, required: false
  private _irEnableFlag?: boolean | cdktf.IResolvable; 
  public get irEnableFlag() {
    return this.getBooleanAttribute('ir_enable_flag');
  }
  public set irEnableFlag(value: boolean | cdktf.IResolvable) {
    this._irEnableFlag = value;
  }
  public resetIrEnableFlag() {
    this._irEnableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irEnableFlagInput() {
    return this._irEnableFlag;
  }

  // l2_only_flag - computed: true, optional: true, required: false
  private _l2OnlyFlag?: boolean | cdktf.IResolvable; 
  public get l2OnlyFlag() {
    return this.getBooleanAttribute('l2_only_flag');
  }
  public set l2OnlyFlag(value: boolean | cdktf.IResolvable) {
    this._l2OnlyFlag = value;
  }
  public resetL2OnlyFlag() {
    this._l2OnlyFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2OnlyFlagInput() {
    return this._l2OnlyFlag;
  }

  // l3_gateway_flag - computed: true, optional: true, required: false
  private _l3GatewayFlag?: boolean | cdktf.IResolvable; 
  public get l3GatewayFlag() {
    return this.getBooleanAttribute('l3_gateway_flag');
  }
  public set l3GatewayFlag(value: boolean | cdktf.IResolvable) {
    this._l3GatewayFlag = value;
  }
  public resetL3GatewayFlag() {
    this._l3GatewayFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3GatewayFlagInput() {
    return this._l3GatewayFlag;
  }

  // loopback_id - computed: true, optional: true, required: false
  private _loopbackId?: number; 
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }
  public set loopbackId(value: number) {
    this._loopbackId = value;
  }
  public resetLoopbackId() {
    this._loopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIdInput() {
    return this._loopbackId;
  }

  // mcast_group - computed: true, optional: true, required: false
  private _mcastGroup?: string; 
  public get mcastGroup() {
    return this.getStringAttribute('mcast_group');
  }
  public set mcastGroup(value: string) {
    this._mcastGroup = value;
  }
  public resetMcastGroup() {
    this._mcastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastGroupInput() {
    return this._mcastGroup;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // rt_both_flag - computed: true, optional: true, required: false
  private _rtBothFlag?: boolean | cdktf.IResolvable; 
  public get rtBothFlag() {
    return this.getBooleanAttribute('rt_both_flag');
  }
  public set rtBothFlag(value: boolean | cdktf.IResolvable) {
    this._rtBothFlag = value;
  }
  public resetRtBothFlag() {
    this._rtBothFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtBothFlagInput() {
    return this._rtBothFlag;
  }

  // secondary_gw_1 - computed: true, optional: true, required: false
  private _secondaryGw1?: string; 
  public get secondaryGw1() {
    return this.getStringAttribute('secondary_gw_1');
  }
  public set secondaryGw1(value: string) {
    this._secondaryGw1 = value;
  }
  public resetSecondaryGw1() {
    this._secondaryGw1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGw1Input() {
    return this._secondaryGw1;
  }

  // secondary_gw_2 - computed: true, optional: true, required: false
  private _secondaryGw2?: string; 
  public get secondaryGw2() {
    return this.getStringAttribute('secondary_gw_2');
  }
  public set secondaryGw2(value: string) {
    this._secondaryGw2 = value;
  }
  public resetSecondaryGw2() {
    this._secondaryGw2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGw2Input() {
    return this._secondaryGw2;
  }

  // service_template - computed: true, optional: true, required: false
  private _serviceTemplate?: string; 
  public get serviceTemplate() {
    return this.getStringAttribute('service_template');
  }
  public set serviceTemplate(value: string) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // trm_enable_flag - computed: true, optional: true, required: false
  private _trmEnableFlag?: boolean | cdktf.IResolvable; 
  public get trmEnableFlag() {
    return this.getBooleanAttribute('trm_enable_flag');
  }
  public set trmEnableFlag(value: boolean | cdktf.IResolvable) {
    this._trmEnableFlag = value;
  }
  public resetTrmEnableFlag() {
    this._trmEnableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmEnableFlagInput() {
    return this._trmEnableFlag;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new DataDcnmNetworkAttachmentsList(this, "attachments", true);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: DataDcnmNetworkAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_supp_flag: cdktf.booleanToTerraform(this._arpSuppFlag),
      deploy: cdktf.booleanToTerraform(this._deploy),
      description: cdktf.stringToTerraform(this._description),
      dhcp_1: cdktf.stringToTerraform(this._dhcp1),
      dhcp_2: cdktf.stringToTerraform(this._dhcp2),
      dhcp_vrf: cdktf.stringToTerraform(this._dhcpVrf),
      display_name: cdktf.stringToTerraform(this._displayName),
      extension_template: cdktf.stringToTerraform(this._extensionTemplate),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      id: cdktf.stringToTerraform(this._id),
      ipv4_gateway: cdktf.stringToTerraform(this._ipv4Gateway),
      ipv6_gateway: cdktf.stringToTerraform(this._ipv6Gateway),
      ir_enable_flag: cdktf.booleanToTerraform(this._irEnableFlag),
      l2_only_flag: cdktf.booleanToTerraform(this._l2OnlyFlag),
      l3_gateway_flag: cdktf.booleanToTerraform(this._l3GatewayFlag),
      loopback_id: cdktf.numberToTerraform(this._loopbackId),
      mcast_group: cdktf.stringToTerraform(this._mcastGroup),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      rt_both_flag: cdktf.booleanToTerraform(this._rtBothFlag),
      secondary_gw_1: cdktf.stringToTerraform(this._secondaryGw1),
      secondary_gw_2: cdktf.stringToTerraform(this._secondaryGw2),
      service_template: cdktf.stringToTerraform(this._serviceTemplate),
      source: cdktf.stringToTerraform(this._source),
      tag: cdktf.stringToTerraform(this._tag),
      template: cdktf.stringToTerraform(this._template),
      trm_enable_flag: cdktf.booleanToTerraform(this._trmEnableFlag),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      attachments: cdktf.listMapper(dataDcnmNetworkAttachmentsToTerraform, true)(this._attachments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_supp_flag: {
        value: cdktf.booleanToHclTerraform(this._arpSuppFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_1: {
        value: cdktf.stringToHclTerraform(this._dhcp1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_2: {
        value: cdktf.stringToHclTerraform(this._dhcp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_vrf: {
        value: cdktf.stringToHclTerraform(this._dhcpVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_template: {
        value: cdktf.stringToHclTerraform(this._extensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
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
      ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ir_enable_flag: {
        value: cdktf.booleanToHclTerraform(this._irEnableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_only_flag: {
        value: cdktf.booleanToHclTerraform(this._l2OnlyFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3_gateway_flag: {
        value: cdktf.booleanToHclTerraform(this._l3GatewayFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loopback_id: {
        value: cdktf.numberToHclTerraform(this._loopbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mcast_group: {
        value: cdktf.stringToHclTerraform(this._mcastGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rt_both_flag: {
        value: cdktf.booleanToHclTerraform(this._rtBothFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secondary_gw_1: {
        value: cdktf.stringToHclTerraform(this._secondaryGw1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_gw_2: {
        value: cdktf.stringToHclTerraform(this._secondaryGw2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_template: {
        value: cdktf.stringToHclTerraform(this._serviceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trm_enable_flag: {
        value: cdktf.booleanToHclTerraform(this._trmEnableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachments: {
        value: cdktf.listMapperHcl(dataDcnmNetworkAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataDcnmNetworkAttachmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
