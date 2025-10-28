// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdVappVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#id DataVcdVappVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name for the VM, unique within the vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#name DataVcdVappVm#name}
  */
  readonly name: string;
  /**
  * Optional number of seconds to try and wait for DHCP IP (valid for 'network' block only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#network_dhcp_wait_seconds DataVcdVappVm#network_dhcp_wait_seconds}
  */
  readonly networkDhcpWaitSeconds?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#org DataVcdVappVm#org}
  */
  readonly org?: string;
  /**
  * VM placement policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#placement_policy_id DataVcdVappVm#placement_policy_id}
  */
  readonly placementPolicyId?: string;
  /**
  * VM sizing policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#sizing_policy_id DataVcdVappVm#sizing_policy_id}
  */
  readonly sizingPolicyId?: string;
  /**
  * The vApp this VM belongs to - Required, unless it is a standalone VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#vapp_name DataVcdVappVm#vapp_name}
  */
  readonly vappName: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#vdc DataVcdVappVm#vdc}
  */
  readonly vdc?: string;
}
export interface DataVcdVappVmBootOptions {
}

export function dataVcdVappVmBootOptionsToTerraform(struct?: DataVcdVappVmBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmBootOptionsToHclTerraform(struct?: DataVcdVappVmBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmBootOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmBootOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmBootOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_delay - computed: true, optional: false, required: false
  public get bootDelay() {
    return this.getNumberAttribute('boot_delay');
  }

  // boot_retry_delay - computed: true, optional: false, required: false
  public get bootRetryDelay() {
    return this.getNumberAttribute('boot_retry_delay');
  }

  // boot_retry_enabled - computed: true, optional: false, required: false
  public get bootRetryEnabled() {
    return this.getBooleanAttribute('boot_retry_enabled');
  }

  // efi_secure_boot - computed: true, optional: false, required: false
  public get efiSecureBoot() {
    return this.getBooleanAttribute('efi_secure_boot');
  }

  // enter_bios_setup_on_next_boot - computed: true, optional: false, required: false
  public get enterBiosSetupOnNextBoot() {
    return this.getBooleanAttribute('enter_bios_setup_on_next_boot');
  }
}

export class DataVcdVappVmBootOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmBootOptionsOutputReference {
    return new DataVcdVappVmBootOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmCustomization {
}

export function dataVcdVappVmCustomizationToTerraform(struct?: DataVcdVappVmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmCustomizationToHclTerraform(struct?: DataVcdVappVmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // allow_local_admin_password - computed: true, optional: false, required: false
  public get allowLocalAdminPassword() {
    return this.getBooleanAttribute('allow_local_admin_password');
  }

  // auto_generate_password - computed: true, optional: false, required: false
  public get autoGeneratePassword() {
    return this.getBooleanAttribute('auto_generate_password');
  }

  // change_sid - computed: true, optional: false, required: false
  public get changeSid() {
    return this.getBooleanAttribute('change_sid');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // initscript - computed: true, optional: false, required: false
  public get initscript() {
    return this.getStringAttribute('initscript');
  }

  // join_domain - computed: true, optional: false, required: false
  public get joinDomain() {
    return this.getBooleanAttribute('join_domain');
  }

  // join_domain_account_ou - computed: true, optional: false, required: false
  public get joinDomainAccountOu() {
    return this.getStringAttribute('join_domain_account_ou');
  }

  // join_domain_name - computed: true, optional: false, required: false
  public get joinDomainName() {
    return this.getStringAttribute('join_domain_name');
  }

  // join_domain_password - computed: true, optional: false, required: false
  public get joinDomainPassword() {
    return this.getStringAttribute('join_domain_password');
  }

  // join_domain_user - computed: true, optional: false, required: false
  public get joinDomainUser() {
    return this.getStringAttribute('join_domain_user');
  }

  // join_org_domain - computed: true, optional: false, required: false
  public get joinOrgDomain() {
    return this.getBooleanAttribute('join_org_domain');
  }

  // must_change_password_on_first_login - computed: true, optional: false, required: false
  public get mustChangePasswordOnFirstLogin() {
    return this.getBooleanAttribute('must_change_password_on_first_login');
  }

  // number_of_auto_logons - computed: true, optional: false, required: false
  public get numberOfAutoLogons() {
    return this.getNumberAttribute('number_of_auto_logons');
  }
}

export class DataVcdVappVmCustomizationList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmCustomizationOutputReference {
    return new DataVcdVappVmCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmDisk {
}

export function dataVcdVappVmDiskToTerraform(struct?: DataVcdVappVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmDiskToHclTerraform(struct?: DataVcdVappVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_number - computed: true, optional: false, required: false
  public get busNumber() {
    return this.getStringAttribute('bus_number');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // unit_number - computed: true, optional: false, required: false
  public get unitNumber() {
    return this.getStringAttribute('unit_number');
  }
}

export class DataVcdVappVmDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmDiskOutputReference {
    return new DataVcdVappVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmExtraConfig {
}

export function dataVcdVappVmExtraConfigToTerraform(struct?: DataVcdVappVmExtraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmExtraConfigToHclTerraform(struct?: DataVcdVappVmExtraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmExtraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmExtraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmExtraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVcdVappVmExtraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmExtraConfigOutputReference {
    return new DataVcdVappVmExtraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmInternalDisk {
}

export function dataVcdVappVmInternalDiskToTerraform(struct?: DataVcdVappVmInternalDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmInternalDiskToHclTerraform(struct?: DataVcdVappVmInternalDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmInternalDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmInternalDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmInternalDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_number - computed: true, optional: false, required: false
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // storage_profile - computed: true, optional: false, required: false
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }

  // thin_provisioned - computed: true, optional: false, required: false
  public get thinProvisioned() {
    return this.getBooleanAttribute('thin_provisioned');
  }

  // unit_number - computed: true, optional: false, required: false
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
}

export class DataVcdVappVmInternalDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmInternalDiskOutputReference {
    return new DataVcdVappVmInternalDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmMetadataEntry {
}

export function dataVcdVappVmMetadataEntryToTerraform(struct?: DataVcdVappVmMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmMetadataEntryToHclTerraform(struct?: DataVcdVappVmMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmMetadataEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmMetadataEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_access - computed: true, optional: false, required: false
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVcdVappVmMetadataEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmMetadataEntryOutputReference {
    return new DataVcdVappVmMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdVappVmNetwork {
}

export function dataVcdVappVmNetworkToTerraform(struct?: DataVcdVappVmNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdVappVmNetworkToHclTerraform(struct?: DataVcdVappVmNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdVappVmNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdVappVmNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdVappVmNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adapter_type - computed: true, optional: false, required: false
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_allocation_mode - computed: true, optional: false, required: false
  public get ipAllocationMode() {
    return this.getStringAttribute('ip_allocation_mode');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secondary_ip - computed: true, optional: false, required: false
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }

  // secondary_ip_allocation_mode - computed: true, optional: false, required: false
  public get secondaryIpAllocationMode() {
    return this.getStringAttribute('secondary_ip_allocation_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataVcdVappVmNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdVappVmNetworkOutputReference {
    return new DataVcdVappVmNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm vcd_vapp_vm}
*/
export class DataVcdVappVm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdVappVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdVappVm to import
  * @param importFromId The id of the existing DataVcdVappVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdVappVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/vapp_vm vcd_vapp_vm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdVappVmConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdVappVmConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_vm',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._name = config.name;
    this._networkDhcpWaitSeconds = config.networkDhcpWaitSeconds;
    this._org = config.org;
    this._placementPolicyId = config.placementPolicyId;
    this._sizingPolicyId = config.sizingPolicyId;
    this._vappName = config.vappName;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_options - computed: true, optional: false, required: false
  private _bootOptions = new DataVcdVappVmBootOptionsList(this, "boot_options", false);
  public get bootOptions() {
    return this._bootOptions;
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // cpu_cores - computed: true, optional: false, required: false
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }

  // cpu_hot_add_enabled - computed: true, optional: false, required: false
  public get cpuHotAddEnabled() {
    return this.getBooleanAttribute('cpu_hot_add_enabled');
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }

  // cpu_priority - computed: true, optional: false, required: false
  public get cpuPriority() {
    return this.getStringAttribute('cpu_priority');
  }

  // cpu_reservation - computed: true, optional: false, required: false
  public get cpuReservation() {
    return this.getNumberAttribute('cpu_reservation');
  }

  // cpu_shares - computed: true, optional: false, required: false
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // customization - computed: true, optional: false, required: false
  private _customization = new DataVcdVappVmCustomizationList(this, "customization", false);
  public get customization() {
    return this._customization;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataVcdVappVmDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }

  // expose_hardware_virtualization - computed: true, optional: false, required: false
  public get exposeHardwareVirtualization() {
    return this.getBooleanAttribute('expose_hardware_virtualization');
  }

  // extra_config - computed: true, optional: false, required: false
  private _extraConfig = new DataVcdVappVmExtraConfigList(this, "extra_config", false);
  public get extraConfig() {
    return this._extraConfig;
  }

  // firmware - computed: true, optional: false, required: false
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // guest_properties - computed: true, optional: false, required: false
  private _guestProperties = new cdktf.StringMap(this, "guest_properties");
  public get guestProperties() {
    return this._guestProperties;
  }

  // hardware_version - computed: true, optional: false, required: false
  public get hardwareVersion() {
    return this.getStringAttribute('hardware_version');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // inherited_metadata - computed: true, optional: false, required: false
  private _inheritedMetadata = new cdktf.StringMap(this, "inherited_metadata");
  public get inheritedMetadata() {
    return this._inheritedMetadata;
  }

  // internal_disk - computed: true, optional: false, required: false
  private _internalDisk = new DataVcdVappVmInternalDiskList(this, "internal_disk", false);
  public get internalDisk() {
    return this._internalDisk;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_hot_add_enabled - computed: true, optional: false, required: false
  public get memoryHotAddEnabled() {
    return this.getBooleanAttribute('memory_hot_add_enabled');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }

  // memory_priority - computed: true, optional: false, required: false
  public get memoryPriority() {
    return this.getStringAttribute('memory_priority');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // memory_shares - computed: true, optional: false, required: false
  public get memoryShares() {
    return this.getNumberAttribute('memory_shares');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metadata_entry - computed: true, optional: false, required: false
  private _metadataEntry = new DataVcdVappVmMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
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

  // network - computed: true, optional: false, required: false
  private _network = new DataVcdVappVmNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // network_dhcp_wait_seconds - computed: false, optional: true, required: false
  private _networkDhcpWaitSeconds?: number; 
  public get networkDhcpWaitSeconds() {
    return this.getNumberAttribute('network_dhcp_wait_seconds');
  }
  public set networkDhcpWaitSeconds(value: number) {
    this._networkDhcpWaitSeconds = value;
  }
  public resetNetworkDhcpWaitSeconds() {
    this._networkDhcpWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDhcpWaitSecondsInput() {
    return this._networkDhcpWaitSeconds;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // placement_policy_id - computed: true, optional: true, required: false
  private _placementPolicyId?: string; 
  public get placementPolicyId() {
    return this.getStringAttribute('placement_policy_id');
  }
  public set placementPolicyId(value: string) {
    this._placementPolicyId = value;
  }
  public resetPlacementPolicyId() {
    this._placementPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyIdInput() {
    return this._placementPolicyId;
  }

  // security_tags - computed: true, optional: false, required: false
  public get securityTags() {
    return cdktf.Fn.tolist(this.getListAttribute('security_tags'));
  }

  // sizing_policy_id - computed: true, optional: true, required: false
  private _sizingPolicyId?: string; 
  public get sizingPolicyId() {
    return this.getStringAttribute('sizing_policy_id');
  }
  public set sizingPolicyId(value: string) {
    this._sizingPolicyId = value;
  }
  public resetSizingPolicyId() {
    this._sizingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingPolicyIdInput() {
    return this._sizingPolicyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_text - computed: true, optional: false, required: false
  public get statusText() {
    return this.getStringAttribute('status_text');
  }

  // storage_profile - computed: true, optional: false, required: false
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }

  // vapp_id - computed: true, optional: false, required: false
  public get vappId() {
    return this.getStringAttribute('vapp_id');
  }

  // vapp_name - computed: false, optional: false, required: true
  private _vappName?: string; 
  public get vappName() {
    return this.getStringAttribute('vapp_name');
  }
  public set vappName(value: string) {
    this._vappName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNameInput() {
    return this._vappName;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vm_type - computed: true, optional: false, required: false
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_dhcp_wait_seconds: cdktf.numberToTerraform(this._networkDhcpWaitSeconds),
      org: cdktf.stringToTerraform(this._org),
      placement_policy_id: cdktf.stringToTerraform(this._placementPolicyId),
      sizing_policy_id: cdktf.stringToTerraform(this._sizingPolicyId),
      vapp_name: cdktf.stringToTerraform(this._vappName),
      vdc: cdktf.stringToTerraform(this._vdc),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_dhcp_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._networkDhcpWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_policy_id: {
        value: cdktf.stringToHclTerraform(this._placementPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sizing_policy_id: {
        value: cdktf.stringToHclTerraform(this._sizingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_name: {
        value: cdktf.stringToHclTerraform(this._vappName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
