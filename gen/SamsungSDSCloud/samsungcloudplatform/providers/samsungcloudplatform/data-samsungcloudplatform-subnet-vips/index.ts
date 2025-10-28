// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformSubnetVipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#id DataSamsungcloudplatformSubnetVips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#page DataSamsungcloudplatformSubnetVips#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#size DataSamsungcloudplatformSubnetVips#size}
  */
  readonly size?: number;
  /**
  * Subnet id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#subnet_id DataSamsungcloudplatformSubnetVips#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Subnet Virtual Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#subnet_ip_address DataSamsungcloudplatformSubnetVips#subnet_ip_address}
  */
  readonly subnetIpAddress?: string;
  /**
  * Subnet Virtual Ip State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#vip_state DataSamsungcloudplatformSubnetVips#vip_state}
  */
  readonly vipState?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#contents DataSamsungcloudplatformSubnetVips#contents}
  */
  readonly contents?: DataSamsungcloudplatformSubnetVipsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIds {
}

export function dataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsToTerraform(struct?: DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsToHclTerraform(struct?: DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // security_group_member_state - computed: true, optional: false, required: false
  public get securityGroupMemberState() {
    return this.getStringAttribute('security_group_member_state');
  }
}

export class DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsOutputReference {
    return new DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformSubnetVipsContents {
}

export function dataSamsungcloudplatformSubnetVipsContentsToTerraform(struct?: DataSamsungcloudplatformSubnetVipsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformSubnetVipsContentsToHclTerraform(struct?: DataSamsungcloudplatformSubnetVipsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformSubnetVipsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformSubnetVipsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformSubnetVipsContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_ip_id - computed: true, optional: false, required: false
  public get natIpId() {
    return this.getStringAttribute('nat_ip_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  private _securityGroupIds = new DataSamsungcloudplatformSubnetVipsContentsSecurityGroupIdsList(this, "security_group_ids", false);
  public get securityGroupIds() {
    return this._securityGroupIds;
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // subnet_ip_address - computed: true, optional: false, required: false
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }

  // subnet_ip_id - computed: true, optional: false, required: false
  public get subnetIpId() {
    return this.getStringAttribute('subnet_ip_id');
  }

  // vip_description - computed: true, optional: false, required: false
  public get vipDescription() {
    return this.getStringAttribute('vip_description');
  }

  // vip_id - computed: true, optional: false, required: false
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }

  // vip_state - computed: true, optional: false, required: false
  public get vipState() {
    return this.getStringAttribute('vip_state');
  }
}

export class DataSamsungcloudplatformSubnetVipsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformSubnetVipsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformSubnetVipsContentsOutputReference {
    return new DataSamsungcloudplatformSubnetVipsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips samsungcloudplatform_subnet_vips}
*/
export class DataSamsungcloudplatformSubnetVips extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_subnet_vips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformSubnetVips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformSubnetVips to import
  * @param importFromId The id of the existing DataSamsungcloudplatformSubnetVips that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformSubnetVips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_subnet_vips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.13.0/docs/data-sources/subnet_vips samsungcloudplatform_subnet_vips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformSubnetVipsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformSubnetVipsConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_subnet_vips',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.13.0'
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
    this._page = config.page;
    this._size = config.size;
    this._subnetId = config.subnetId;
    this._subnetIpAddress = config.subnetIpAddress;
    this._vipState = config.vipState;
    this._contents.internalValue = config.contents;
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ip_address - computed: false, optional: true, required: false
  private _subnetIpAddress?: string; 
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }
  public set subnetIpAddress(value: string) {
    this._subnetIpAddress = value;
  }
  public resetSubnetIpAddress() {
    this._subnetIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddressInput() {
    return this._subnetIpAddress;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // vip_state - computed: false, optional: true, required: false
  private _vipState?: string; 
  public get vipState() {
    return this.getStringAttribute('vip_state');
  }
  public set vipState(value: string) {
    this._vipState = value;
  }
  public resetVipState() {
    this._vipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipStateInput() {
    return this._vipState;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformSubnetVipsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformSubnetVipsContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subnet_ip_address: cdktf.stringToTerraform(this._subnetIpAddress),
      vip_state: cdktf.stringToTerraform(this._vipState),
      contents: cdktf.listMapper(dataSamsungcloudplatformSubnetVipsContentsToTerraform, true)(this._contents.internalValue),
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
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ip_address: {
        value: cdktf.stringToHclTerraform(this._subnetIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_state: {
        value: cdktf.stringToHclTerraform(this._vipState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformSubnetVipsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformSubnetVipsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
