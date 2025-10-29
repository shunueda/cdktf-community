// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Key ID of Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#accesskeyid CredentialAws#accesskeyid}
  */
  readonly accesskeyid: string;
  /**
  * [WINDOWSACCOUNT, LINUXACCOUNT, STORAGE_ARRAY_ACCOUNT, CLOUD_ACCOUNT]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#accounttype CredentialAws#accounttype}
  */
  readonly accounttype?: string;
  /**
  * Description of Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#description CredentialAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#id CredentialAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#name CredentialAws#name}
  */
  readonly name: string;
  /**
  * Secret Access Key of Credential and must be in base64 encoded format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#secretaccesskey CredentialAws#secretaccesskey}
  */
  readonly secretaccesskey: string;
  /**
  * Cloud vendor types appilcable only for Cloud Account type [ALICLOUD_OSS, AMAZON_GLACIER, AMAZON, ATT_SYNAPTIC, REVERA_VAULT, CEPH_OBJECT_GATEWAY_S3, CMCC_ONEST, CLOUDIAN_HYPERSTORE, DELL_EMC_ECS_S3, EMC_ATMOS, FUJITSU_STORAGE_ETERNUS, GOOGLE_CLOUD, HDS_HCP, HITACHI_VANTARA_HCP_S3, HUAWEI_OSS, IBM_CLOUD, IBM_CLOUD_S3, INSPUR_CLOUD, IRON_MOUNTAIN_CLOUD, KINGSOFT_KS3, MICROSOFT_AZURE_TYPE, NETAPP_STORAGEGRID, NUTANIX_BUCKETS, OPENSTACK, AMPLIDATA, RACKSPACE_CLOUD_FILES, S3_COMPATIBLE, SALESFORCE_CONNECTED_APP, SCALITY_RING, TELEFONICA_OPEN_CLOUD_OBJECT_STORAGE, VERIZON_CLOUD, WASABI_HOT_CLOUD_STORAGE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#vendortype CredentialAws#vendortype}
  */
  readonly vendortype?: string;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#security CredentialAws#security}
  */
  readonly security?: CredentialAwsSecurity[] | cdktf.IResolvable;
}
export interface CredentialAwsSecurityAssociationsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#categoryid CredentialAws#categoryid}
  */
  readonly categoryid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#categoryname CredentialAws#categoryname}
  */
  readonly categoryname?: string;
  /**
  * Flag to specify if this is included permission or excluded permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#exclude CredentialAws#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#permissionid CredentialAws#permissionid}
  */
  readonly permissionid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#permissionname CredentialAws#permissionname}
  */
  readonly permissionname?: string;
  /**
  * Returns the type of association. [ALL_CATEGORIES, CATEGORY_ENTITY, PERMISSION_ENTITY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#type CredentialAws#type}
  */
  readonly type?: string;
}

export function credentialAwsSecurityAssociationsPermissionsToTerraform(struct?: CredentialAwsSecurityAssociationsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categoryid: cdktf.numberToTerraform(struct!.categoryid),
    categoryname: cdktf.stringToTerraform(struct!.categoryname),
    exclude: cdktf.stringToTerraform(struct!.exclude),
    permissionid: cdktf.numberToTerraform(struct!.permissionid),
    permissionname: cdktf.stringToTerraform(struct!.permissionname),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function credentialAwsSecurityAssociationsPermissionsToHclTerraform(struct?: CredentialAwsSecurityAssociationsPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categoryid: {
      value: cdktf.numberToHclTerraform(struct!.categoryid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categoryname: {
      value: cdktf.stringToHclTerraform(struct!.categoryname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissionid: {
      value: cdktf.numberToHclTerraform(struct!.permissionid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissionname: {
      value: cdktf.stringToHclTerraform(struct!.permissionname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityAssociationsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityAssociationsPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryid !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryid = this._categoryid;
    }
    if (this._categoryname !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryname = this._categoryname;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._permissionid !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionid = this._permissionid;
    }
    if (this._permissionname !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionname = this._permissionname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurityAssociationsPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryid = undefined;
      this._categoryname = undefined;
      this._exclude = undefined;
      this._permissionid = undefined;
      this._permissionname = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryid = value.categoryid;
      this._categoryname = value.categoryname;
      this._exclude = value.exclude;
      this._permissionid = value.permissionid;
      this._permissionname = value.permissionname;
      this._type = value.type;
    }
  }

  // categoryid - computed: true, optional: true, required: false
  private _categoryid?: number; 
  public get categoryid() {
    return this.getNumberAttribute('categoryid');
  }
  public set categoryid(value: number) {
    this._categoryid = value;
  }
  public resetCategoryid() {
    this._categoryid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryidInput() {
    return this._categoryid;
  }

  // categoryname - computed: true, optional: true, required: false
  private _categoryname?: string; 
  public get categoryname() {
    return this.getStringAttribute('categoryname');
  }
  public set categoryname(value: string) {
    this._categoryname = value;
  }
  public resetCategoryname() {
    this._categoryname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorynameInput() {
    return this._categoryname;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // permissionid - computed: true, optional: true, required: false
  private _permissionid?: number; 
  public get permissionid() {
    return this.getNumberAttribute('permissionid');
  }
  public set permissionid(value: number) {
    this._permissionid = value;
  }
  public resetPermissionid() {
    this._permissionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionidInput() {
    return this._permissionid;
  }

  // permissionname - computed: true, optional: true, required: false
  private _permissionname?: string; 
  public get permissionname() {
    return this.getStringAttribute('permissionname');
  }
  public set permissionname(value: string) {
    this._permissionname = value;
  }
  public resetPermissionname() {
    this._permissionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionnameInput() {
    return this._permissionname;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CredentialAwsSecurityAssociationsPermissionsList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityAssociationsPermissions[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityAssociationsPermissionsOutputReference {
    return new CredentialAwsSecurityAssociationsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityAssociationsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#id CredentialAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function credentialAwsSecurityAssociationsUserToTerraform(struct?: CredentialAwsSecurityAssociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function credentialAwsSecurityAssociationsUserToHclTerraform(struct?: CredentialAwsSecurityAssociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityAssociationsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityAssociationsUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurityAssociationsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class CredentialAwsSecurityAssociationsUserList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityAssociationsUser[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityAssociationsUserOutputReference {
    return new CredentialAwsSecurityAssociationsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityAssociationsUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#id CredentialAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function credentialAwsSecurityAssociationsUsergroupToTerraform(struct?: CredentialAwsSecurityAssociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function credentialAwsSecurityAssociationsUsergroupToHclTerraform(struct?: CredentialAwsSecurityAssociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityAssociationsUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityAssociationsUsergroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurityAssociationsUsergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class CredentialAwsSecurityAssociationsUsergroupList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityAssociationsUsergroup[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityAssociationsUsergroupOutputReference {
    return new CredentialAwsSecurityAssociationsUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityAssociations {
  /**
  * To check if the user/user group associated is the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#iscreatorassociation CredentialAws#iscreatorassociation}
  */
  readonly iscreatorassociation?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#permissions CredentialAws#permissions}
  */
  readonly permissions?: CredentialAwsSecurityAssociationsPermissions[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#user CredentialAws#user}
  */
  readonly user?: CredentialAwsSecurityAssociationsUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#usergroup CredentialAws#usergroup}
  */
  readonly usergroup?: CredentialAwsSecurityAssociationsUsergroup[] | cdktf.IResolvable;
}

export function credentialAwsSecurityAssociationsToTerraform(struct?: CredentialAwsSecurityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iscreatorassociation: cdktf.stringToTerraform(struct!.iscreatorassociation),
    permissions: cdktf.listMapper(credentialAwsSecurityAssociationsPermissionsToTerraform, true)(struct!.permissions),
    user: cdktf.listMapper(credentialAwsSecurityAssociationsUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(credentialAwsSecurityAssociationsUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function credentialAwsSecurityAssociationsToHclTerraform(struct?: CredentialAwsSecurityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iscreatorassociation: {
      value: cdktf.stringToHclTerraform(struct!.iscreatorassociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(credentialAwsSecurityAssociationsPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityAssociationsPermissionsList",
    },
    user: {
      value: cdktf.listMapperHcl(credentialAwsSecurityAssociationsUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityAssociationsUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(credentialAwsSecurityAssociationsUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityAssociationsUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iscreatorassociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscreatorassociation = this._iscreatorassociation;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iscreatorassociation = undefined;
      this._permissions.internalValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iscreatorassociation = value.iscreatorassociation;
      this._permissions.internalValue = value.permissions;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // iscreatorassociation - computed: true, optional: true, required: false
  private _iscreatorassociation?: string; 
  public get iscreatorassociation() {
    return this.getStringAttribute('iscreatorassociation');
  }
  public set iscreatorassociation(value: string) {
    this._iscreatorassociation = value;
  }
  public resetIscreatorassociation() {
    this._iscreatorassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscreatorassociationInput() {
    return this._iscreatorassociation;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new CredentialAwsSecurityAssociationsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: CredentialAwsSecurityAssociationsPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new CredentialAwsSecurityAssociationsUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: CredentialAwsSecurityAssociationsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new CredentialAwsSecurityAssociationsUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: CredentialAwsSecurityAssociationsUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class CredentialAwsSecurityAssociationsList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityAssociations[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityAssociationsOutputReference {
    return new CredentialAwsSecurityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityOwnerUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#id CredentialAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#name CredentialAws#name}
  */
  readonly name?: string;
}

export function credentialAwsSecurityOwnerUserToTerraform(struct?: CredentialAwsSecurityOwnerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function credentialAwsSecurityOwnerUserToHclTerraform(struct?: CredentialAwsSecurityOwnerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CredentialAwsSecurityOwnerUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityOwnerUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CredentialAwsSecurityOwnerUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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

export class CredentialAwsSecurityOwnerUserList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityOwnerUser[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityOwnerUserOutputReference {
    return new CredentialAwsSecurityOwnerUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityOwnerUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#id CredentialAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#name CredentialAws#name}
  */
  readonly name?: string;
}

export function credentialAwsSecurityOwnerUsergroupToTerraform(struct?: CredentialAwsSecurityOwnerUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function credentialAwsSecurityOwnerUsergroupToHclTerraform(struct?: CredentialAwsSecurityOwnerUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CredentialAwsSecurityOwnerUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityOwnerUsergroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CredentialAwsSecurityOwnerUsergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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

export class CredentialAwsSecurityOwnerUsergroupList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityOwnerUsergroup[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityOwnerUsergroupOutputReference {
    return new CredentialAwsSecurityOwnerUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurityOwner {
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#user CredentialAws#user}
  */
  readonly user?: CredentialAwsSecurityOwnerUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#usergroup CredentialAws#usergroup}
  */
  readonly usergroup?: CredentialAwsSecurityOwnerUsergroup[] | cdktf.IResolvable;
}

export function credentialAwsSecurityOwnerToTerraform(struct?: CredentialAwsSecurityOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.listMapper(credentialAwsSecurityOwnerUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(credentialAwsSecurityOwnerUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function credentialAwsSecurityOwnerToHclTerraform(struct?: CredentialAwsSecurityOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.listMapperHcl(credentialAwsSecurityOwnerUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityOwnerUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(credentialAwsSecurityOwnerUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityOwnerUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurityOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurityOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user = new CredentialAwsSecurityOwnerUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: CredentialAwsSecurityOwnerUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new CredentialAwsSecurityOwnerUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: CredentialAwsSecurityOwnerUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class CredentialAwsSecurityOwnerList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurityOwner[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityOwnerOutputReference {
    return new CredentialAwsSecurityOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialAwsSecurity {
  /**
  * associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#associations CredentialAws#associations}
  */
  readonly associations?: CredentialAwsSecurityAssociations[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#owner CredentialAws#owner}
  */
  readonly owner?: CredentialAwsSecurityOwner[] | cdktf.IResolvable;
}

export function credentialAwsSecurityToTerraform(struct?: CredentialAwsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associations: cdktf.listMapper(credentialAwsSecurityAssociationsToTerraform, true)(struct!.associations),
    owner: cdktf.listMapper(credentialAwsSecurityOwnerToTerraform, true)(struct!.owner),
  }
}


export function credentialAwsSecurityToHclTerraform(struct?: CredentialAwsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associations: {
      value: cdktf.listMapperHcl(credentialAwsSecurityAssociationsToHclTerraform, true)(struct!.associations),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialAwsSecurityAssociationsList",
    },
    owner: {
      value: cdktf.listMapperHcl(credentialAwsSecurityOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialAwsSecurityOwnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialAwsSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialAwsSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associations = this._associations?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialAwsSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associations.internalValue = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associations.internalValue = value.associations;
      this._owner.internalValue = value.owner;
    }
  }

  // associations - computed: false, optional: true, required: false
  private _associations = new CredentialAwsSecurityAssociationsList(this, "associations", true);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: CredentialAwsSecurityAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  public resetAssociations() {
    this._associations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new CredentialAwsSecurityOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: CredentialAwsSecurityOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}

export class CredentialAwsSecurityList extends cdktf.ComplexList {
  public internalValue? : CredentialAwsSecurity[] | cdktf.IResolvable

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
  public get(index: number): CredentialAwsSecurityOutputReference {
    return new CredentialAwsSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws commvault_credential_aws}
*/
export class CredentialAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_credential_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialAws to import
  * @param importFromId The id of the existing CredentialAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_credential_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/credential_aws commvault_credential_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_credential_aws',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accesskeyid = config.accesskeyid;
    this._accounttype = config.accounttype;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._secretaccesskey = config.secretaccesskey;
    this._vendortype = config.vendortype;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskeyid - computed: false, optional: false, required: true
  private _accesskeyid?: string; 
  public get accesskeyid() {
    return this.getStringAttribute('accesskeyid');
  }
  public set accesskeyid(value: string) {
    this._accesskeyid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyidInput() {
    return this._accesskeyid;
  }

  // accounttype - computed: true, optional: true, required: false
  private _accounttype?: string; 
  public get accounttype() {
    return this.getStringAttribute('accounttype');
  }
  public set accounttype(value: string) {
    this._accounttype = value;
  }
  public resetAccounttype() {
    this._accounttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accounttypeInput() {
    return this._accounttype;
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

  // secretaccesskey - computed: false, optional: false, required: true
  private _secretaccesskey?: string; 
  public get secretaccesskey() {
    return this.getStringAttribute('secretaccesskey');
  }
  public set secretaccesskey(value: string) {
    this._secretaccesskey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretaccesskeyInput() {
    return this._secretaccesskey;
  }

  // vendortype - computed: true, optional: true, required: false
  private _vendortype?: string; 
  public get vendortype() {
    return this.getStringAttribute('vendortype');
  }
  public set vendortype(value: string) {
    this._vendortype = value;
  }
  public resetVendortype() {
    this._vendortype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendortypeInput() {
    return this._vendortype;
  }

  // security - computed: false, optional: true, required: false
  private _security = new CredentialAwsSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: CredentialAwsSecurity[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accesskeyid: cdktf.stringToTerraform(this._accesskeyid),
      accounttype: cdktf.stringToTerraform(this._accounttype),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secretaccesskey: cdktf.stringToTerraform(this._secretaccesskey),
      vendortype: cdktf.stringToTerraform(this._vendortype),
      security: cdktf.listMapper(credentialAwsSecurityToTerraform, true)(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesskeyid: {
        value: cdktf.stringToHclTerraform(this._accesskeyid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounttype: {
        value: cdktf.stringToHclTerraform(this._accounttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretaccesskey: {
        value: cdktf.stringToHclTerraform(this._secretaccesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendortype: {
        value: cdktf.stringToHclTerraform(this._vendortype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.listMapperHcl(credentialAwsSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialAwsSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
