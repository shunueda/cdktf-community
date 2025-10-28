// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerSnmPv1V2CUserOidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#id SnmpServerSnmPv1V2CUserOid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * specific the oid (The oid value, object-key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#oid_val SnmpServerSnmPv1V2CUserOid#oid_val}
  */
  readonly oidVal: string;
  /**
  * User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#user SnmpServerSnmPv1V2CUserOid#user}
  */
  readonly user: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#user_tag SnmpServerSnmPv1V2CUserOid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#uuid SnmpServerSnmPv1V2CUserOid#uuid}
  */
  readonly uuid?: string;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#remote SnmpServerSnmPv1V2CUserOid#remote}
  */
  readonly remote?: SnmpServerSnmPv1V2CUserOidRemote;
}
export interface SnmpServerSnmPv1V2CUserOidRemoteHostListStruct {
  /**
  * DNS remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#dns_host SnmpServerSnmPv1V2CUserOid#dns_host}
  */
  readonly dnsHost?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv4_mask SnmpServerSnmPv1V2CUserOid#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserOidRemoteHostListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_host: cdktf.stringToTerraform(struct!.dnsHost),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidRemoteHostListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_host: {
      value: cdktf.stringToHclTerraform(struct!.dnsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidRemoteHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidRemoteHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHost = this._dnsHost;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidRemoteHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsHost = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsHost = value.dnsHost;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // dns_host - computed: false, optional: true, required: false
  private _dnsHost?: string; 
  public get dnsHost() {
    return this.getStringAttribute('dns_host');
  }
  public set dnsHost(value: string) {
    this._dnsHost = value;
  }
  public resetDnsHost() {
    this._dnsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHostInput() {
    return this._dnsHost;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidRemoteHostListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidRemoteHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidRemoteHostListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidRemoteHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct {
  /**
  * IPV4 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv4_host SnmpServerSnmPv1V2CUserOid#ipv4_host}
  */
  readonly ipv4Host?: string;
  /**
  * IPV4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv4_mask SnmpServerSnmPv1V2CUserOid#ipv4_mask}
  */
  readonly ipv4Mask?: string;
}

export function snmpServerSnmPv1V2CUserOidRemoteIpv4ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_host: cdktf.stringToTerraform(struct!.ipv4Host),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidRemoteIpv4ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Host = this._ipv4Host;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Host = undefined;
      this._ipv4Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Host = value.ipv4Host;
      this._ipv4Mask = value.ipv4Mask;
    }
  }

  // ipv4_host - computed: false, optional: true, required: false
  private _ipv4Host?: string; 
  public get ipv4Host() {
    return this.getStringAttribute('ipv4_host');
  }
  public set ipv4Host(value: string) {
    this._ipv4Host = value;
  }
  public resetIpv4Host() {
    this._ipv4Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4HostInput() {
    return this._ipv4Host;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct {
  /**
  * IPV6 remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv6_host SnmpServerSnmPv1V2CUserOid#ipv6_host}
  */
  readonly ipv6Host?: string;
  /**
  * IPV6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv6_mask SnmpServerSnmPv1V2CUserOid#ipv6_mask}
  */
  readonly ipv6Mask?: number;
}

export function snmpServerSnmPv1V2CUserOidRemoteIpv6ListStructToTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_host: cdktf.stringToTerraform(struct!.ipv6Host),
    ipv6_mask: cdktf.numberToTerraform(struct!.ipv6Mask),
  }
}


export function snmpServerSnmPv1V2CUserOidRemoteIpv6ListStructToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_host: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Host !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Host = this._ipv6Host;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Host = undefined;
      this._ipv6Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Host = value.ipv6Host;
      this._ipv6Mask = value.ipv6Mask;
    }
  }

  // ipv6_host - computed: false, optional: true, required: false
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  public resetIpv6Host() {
    this._ipv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // ipv6_mask - computed: false, optional: true, required: false
  private _ipv6Mask?: number; 
  public get ipv6Mask() {
    return this.getNumberAttribute('ipv6_mask');
  }
  public set ipv6Mask(value: number) {
    this._ipv6Mask = value;
  }
  public resetIpv6Mask() {
    this._ipv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskInput() {
    return this._ipv6Mask;
  }
}

export class SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructOutputReference {
    return new SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpServerSnmPv1V2CUserOidRemote {
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#host_list SnmpServerSnmPv1V2CUserOid#host_list}
  */
  readonly hostList?: SnmpServerSnmPv1V2CUserOidRemoteHostListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv4_list SnmpServerSnmPv1V2CUserOid#ipv4_list}
  */
  readonly ipv4List?: SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#ipv6_list SnmpServerSnmPv1V2CUserOid#ipv6_list}
  */
  readonly ipv6List?: SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct[] | cdktf.IResolvable;
}

export function snmpServerSnmPv1V2CUserOidRemoteToTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteOutputReference | SnmpServerSnmPv1V2CUserOidRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidRemoteHostListStructToTerraform, true)(struct!.hostList),
    ipv4_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidRemoteIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(snmpServerSnmPv1V2CUserOidRemoteIpv6ListStructToTerraform, true)(struct!.ipv6List),
  }
}


export function snmpServerSnmPv1V2CUserOidRemoteToHclTerraform(struct?: SnmpServerSnmPv1V2CUserOidRemoteOutputReference | SnmpServerSnmPv1V2CUserOidRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidRemoteHostListStructToHclTerraform, true)(struct!.hostList),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidRemoteHostListStructList",
    },
    ipv4_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidRemoteIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(snmpServerSnmPv1V2CUserOidRemoteIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerSnmPv1V2CUserOidRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerSnmPv1V2CUserOidRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostList = this._hostList?.internalValue;
    }
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerSnmPv1V2CUserOidRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostList.internalValue = undefined;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostList.internalValue = value.hostList;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
    }
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new SnmpServerSnmPv1V2CUserOidRemoteHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: SnmpServerSnmPv1V2CUserOidRemoteHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: SnmpServerSnmPv1V2CUserOidRemoteIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: SnmpServerSnmPv1V2CUserOidRemoteIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid thunder_snmp_server_SNMPv1_v2c_user_oid}
*/
export class SnmpServerSnmPv1V2CUserOid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_SNMPv1_v2c_user_oid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerSnmPv1V2CUserOid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerSnmPv1V2CUserOid to import
  * @param importFromId The id of the existing SnmpServerSnmPv1V2CUserOid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerSnmPv1V2CUserOid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_SNMPv1_v2c_user_oid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_snm_pv1_v2c_user_oid thunder_snmp_server_SNMPv1_v2c_user_oid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerSnmPv1V2CUserOidConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerSnmPv1V2CUserOidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_SNMPv1_v2c_user_oid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oidVal = config.oidVal;
    this._user = config.user;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._remote.internalValue = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oid_val - computed: false, optional: false, required: true
  private _oidVal?: string; 
  public get oidVal() {
    return this.getStringAttribute('oid_val');
  }
  public set oidVal(value: string) {
    this._oidVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidValInput() {
    return this._oidVal;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new SnmpServerSnmPv1V2CUserOidRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SnmpServerSnmPv1V2CUserOidRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oid_val: cdktf.stringToTerraform(this._oidVal),
      user: cdktf.stringToTerraform(this._user),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      remote: snmpServerSnmPv1V2CUserOidRemoteToTerraform(this._remote.internalValue),
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
      oid_val: {
        value: cdktf.stringToHclTerraform(this._oidVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: snmpServerSnmPv1V2CUserOidRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerSnmPv1V2CUserOidRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
