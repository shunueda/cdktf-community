// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeInterfacePortChannelSubinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface#device DataIosxeInterfacePortChannelSubinterface#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface#name DataIosxeInterfacePortChannelSubinterface#name}
  */
  readonly name: string;
}
export interface DataIosxeInterfacePortChannelSubinterfaceHelperAddresses {
}

export function dataIosxeInterfacePortChannelSubinterfaceHelperAddressesToTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfacePortChannelSubinterfaceHelperAddressesToHclTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceHelperAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfacePortChannelSubinterfaceHelperAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfacePortChannelSubinterfaceHelperAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfacePortChannelSubinterfaceHelperAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeInterfacePortChannelSubinterfaceHelperAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfacePortChannelSubinterfaceHelperAddressesOutputReference {
    return new DataIosxeInterfacePortChannelSubinterfaceHelperAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfacePortChannelSubinterfaceIpv6Addresses {
}

export function dataIosxeInterfacePortChannelSubinterfaceIpv6AddressesToTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfacePortChannelSubinterfaceIpv6AddressesToHclTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceIpv6Addresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfacePortChannelSubinterfaceIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfacePortChannelSubinterfaceIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfacePortChannelSubinterfaceIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eui_64 - computed: true, optional: false, required: false
  public get eui64() {
    return this.getBooleanAttribute('eui_64');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataIosxeInterfacePortChannelSubinterfaceIpv6AddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfacePortChannelSubinterfaceIpv6AddressesOutputReference {
    return new DataIosxeInterfacePortChannelSubinterfaceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddresses {
}

export function dataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesToTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesToHclTerraform(struct?: DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // link_local - computed: true, optional: false, required: false
  public get linkLocal() {
    return this.getBooleanAttribute('link_local');
  }
}

export class DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference {
    return new DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface iosxe_interface_port_channel_subinterface}
*/
export class DataIosxeInterfacePortChannelSubinterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_port_channel_subinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeInterfacePortChannelSubinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeInterfacePortChannelSubinterface to import
  * @param importFromId The id of the existing DataIosxeInterfacePortChannelSubinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeInterfacePortChannelSubinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_port_channel_subinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/data-sources/interface_port_channel_subinterface iosxe_interface_port_channel_subinterface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeInterfacePortChannelSubinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeInterfacePortChannelSubinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_port_channel_subinterface',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_timeout - computed: true, optional: false, required: false
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }

  // auto_qos_classify - computed: true, optional: false, required: false
  public get autoQosClassify() {
    return this.getBooleanAttribute('auto_qos_classify');
  }

  // auto_qos_classify_police - computed: true, optional: false, required: false
  public get autoQosClassifyPolice() {
    return this.getBooleanAttribute('auto_qos_classify_police');
  }

  // auto_qos_trust - computed: true, optional: false, required: false
  public get autoQosTrust() {
    return this.getBooleanAttribute('auto_qos_trust');
  }

  // auto_qos_trust_cos - computed: true, optional: false, required: false
  public get autoQosTrustCos() {
    return this.getBooleanAttribute('auto_qos_trust_cos');
  }

  // auto_qos_trust_dscp - computed: true, optional: false, required: false
  public get autoQosTrustDscp() {
    return this.getBooleanAttribute('auto_qos_trust_dscp');
  }

  // auto_qos_video_cts - computed: true, optional: false, required: false
  public get autoQosVideoCts() {
    return this.getBooleanAttribute('auto_qos_video_cts');
  }

  // auto_qos_video_ip_camera - computed: true, optional: false, required: false
  public get autoQosVideoIpCamera() {
    return this.getBooleanAttribute('auto_qos_video_ip_camera');
  }

  // auto_qos_video_media_player - computed: true, optional: false, required: false
  public get autoQosVideoMediaPlayer() {
    return this.getBooleanAttribute('auto_qos_video_media_player');
  }

  // auto_qos_voip - computed: true, optional: false, required: false
  public get autoQosVoip() {
    return this.getBooleanAttribute('auto_qos_voip');
  }

  // auto_qos_voip_cisco_phone - computed: true, optional: false, required: false
  public get autoQosVoipCiscoPhone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_phone');
  }

  // auto_qos_voip_cisco_softphone - computed: true, optional: false, required: false
  public get autoQosVoipCiscoSoftphone() {
    return this.getBooleanAttribute('auto_qos_voip_cisco_softphone');
  }

  // auto_qos_voip_trust - computed: true, optional: false, required: false
  public get autoQosVoipTrust() {
    return this.getBooleanAttribute('auto_qos_voip_trust');
  }

  // bfd_echo - computed: true, optional: false, required: false
  public get bfdEcho() {
    return this.getBooleanAttribute('bfd_echo');
  }

  // bfd_enable - computed: true, optional: false, required: false
  public get bfdEnable() {
    return this.getBooleanAttribute('bfd_enable');
  }

  // bfd_interval - computed: true, optional: false, required: false
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }

  // bfd_interval_min_rx - computed: true, optional: false, required: false
  public get bfdIntervalMinRx() {
    return this.getNumberAttribute('bfd_interval_min_rx');
  }

  // bfd_interval_multiplier - computed: true, optional: false, required: false
  public get bfdIntervalMultiplier() {
    return this.getNumberAttribute('bfd_interval_multiplier');
  }

  // bfd_local_address - computed: true, optional: false, required: false
  public get bfdLocalAddress() {
    return this.getStringAttribute('bfd_local_address');
  }

  // bfd_template - computed: true, optional: false, required: false
  public get bfdTemplate() {
    return this.getStringAttribute('bfd_template');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encapsulation_dot1q_vlan_id - computed: true, optional: false, required: false
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }

  // helper_addresses - computed: true, optional: false, required: false
  private _helperAddresses = new DataIosxeInterfacePortChannelSubinterfaceHelperAddressesList(this, "helper_addresses", false);
  public get helperAddresses() {
    return this._helperAddresses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access_group_in - computed: true, optional: false, required: false
  public get ipAccessGroupIn() {
    return this.getStringAttribute('ip_access_group_in');
  }

  // ip_access_group_in_enable - computed: true, optional: false, required: false
  public get ipAccessGroupInEnable() {
    return this.getBooleanAttribute('ip_access_group_in_enable');
  }

  // ip_access_group_out - computed: true, optional: false, required: false
  public get ipAccessGroupOut() {
    return this.getStringAttribute('ip_access_group_out');
  }

  // ip_access_group_out_enable - computed: true, optional: false, required: false
  public get ipAccessGroupOutEnable() {
    return this.getBooleanAttribute('ip_access_group_out_enable');
  }

  // ip_arp_inspection_limit_rate - computed: true, optional: false, required: false
  public get ipArpInspectionLimitRate() {
    return this.getNumberAttribute('ip_arp_inspection_limit_rate');
  }

  // ip_arp_inspection_trust - computed: true, optional: false, required: false
  public get ipArpInspectionTrust() {
    return this.getBooleanAttribute('ip_arp_inspection_trust');
  }

  // ip_proxy_arp - computed: true, optional: false, required: false
  public get ipProxyArp() {
    return this.getBooleanAttribute('ip_proxy_arp');
  }

  // ip_redirects - computed: true, optional: false, required: false
  public get ipRedirects() {
    return this.getBooleanAttribute('ip_redirects');
  }

  // ip_unreachables - computed: true, optional: false, required: false
  public get ipUnreachables() {
    return this.getBooleanAttribute('ip_unreachables');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_mask - computed: true, optional: false, required: false
  public get ipv4AddressMask() {
    return this.getStringAttribute('ipv4_address_mask');
  }

  // ipv6_address_autoconfig_default - computed: true, optional: false, required: false
  public get ipv6AddressAutoconfigDefault() {
    return this.getBooleanAttribute('ipv6_address_autoconfig_default');
  }

  // ipv6_address_dhcp - computed: true, optional: false, required: false
  public get ipv6AddressDhcp() {
    return this.getBooleanAttribute('ipv6_address_dhcp');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataIosxeInterfacePortChannelSubinterfaceIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // ipv6_enable - computed: true, optional: false, required: false
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }

  // ipv6_link_local_addresses - computed: true, optional: false, required: false
  private _ipv6LinkLocalAddresses = new DataIosxeInterfacePortChannelSubinterfaceIpv6LinkLocalAddressesList(this, "ipv6_link_local_addresses", false);
  public get ipv6LinkLocalAddresses() {
    return this._ipv6LinkLocalAddresses;
  }

  // ipv6_mtu - computed: true, optional: false, required: false
  public get ipv6Mtu() {
    return this.getNumberAttribute('ipv6_mtu');
  }

  // ipv6_nd_ra_suppress_all - computed: true, optional: false, required: false
  public get ipv6NdRaSuppressAll() {
    return this.getBooleanAttribute('ipv6_nd_ra_suppress_all');
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

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // trust_device - computed: true, optional: false, required: false
  public get trustDevice() {
    return this.getStringAttribute('trust_device');
  }

  // vrf_forwarding - computed: true, optional: false, required: false
  public get vrfForwarding() {
    return this.getStringAttribute('vrf_forwarding');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
