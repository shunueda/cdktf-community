// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbShardingInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#account_password MongodbShardingInstance#account_password}
  */
  readonly accountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#audit_status MongodbShardingInstance#audit_status}
  */
  readonly auditStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#backup_period MongodbShardingInstance#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#backup_time MongodbShardingInstance#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#cs_root_account_password MongodbShardingInstance#cs_root_account_password}
  */
  readonly csRootAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#db_account_name MongodbShardingInstance#db_account_name}
  */
  readonly dbAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#db_account_password MongodbShardingInstance#db_account_password}
  */
  readonly dbAccountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#db_instance_description MongodbShardingInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#engine_version MongodbShardingInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#id MongodbShardingInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#kms_encrypted_password MongodbShardingInstance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#kms_encryption_context MongodbShardingInstance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#name MongodbShardingInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#preferred_backup_period MongodbShardingInstance#preferred_backup_period}
  */
  readonly preferredBackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#preferred_backup_time MongodbShardingInstance#preferred_backup_time}
  */
  readonly preferredBackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#security_ip_list MongodbShardingInstance#security_ip_list}
  */
  readonly securityIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#storage_engine MongodbShardingInstance#storage_engine}
  */
  readonly storageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#tde_status MongodbShardingInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#vswitch_id MongodbShardingInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#zone_id MongodbShardingInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * audit_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#audit_filter MongodbShardingInstance#audit_filter}
  */
  readonly auditFilter?: MongodbShardingInstanceAuditFilter[] | cdktf.IResolvable;
  /**
  * configserver_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#configserver_list MongodbShardingInstance#configserver_list}
  */
  readonly configserverList: MongodbShardingInstanceConfigserverListStruct;
  /**
  * mongo_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#mongo_list MongodbShardingInstance#mongo_list}
  */
  readonly mongoList: MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable;
  /**
  * shard_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#shard_list MongodbShardingInstance#shard_list}
  */
  readonly shardList: MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable;
}
export interface MongodbShardingInstanceAuditFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#filters MongodbShardingInstance#filters}
  */
  readonly filters: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#role_type MongodbShardingInstance#role_type}
  */
  readonly roleType: string;
}

export function mongodbShardingInstanceAuditFilterToTerraform(struct?: MongodbShardingInstanceAuditFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}


export function mongodbShardingInstanceAuditFilterToHclTerraform(struct?: MongodbShardingInstanceAuditFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceAuditFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbShardingInstanceAuditFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceAuditFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters = undefined;
      this._roleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters = value.filters;
      this._roleType = value.roleType;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}

export class MongodbShardingInstanceAuditFilterList extends cdktf.ComplexList {
  public internalValue? : MongodbShardingInstanceAuditFilter[] | cdktf.IResolvable

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
  public get(index: number): MongodbShardingInstanceAuditFilterOutputReference {
    return new MongodbShardingInstanceAuditFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbShardingInstanceConfigserverListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#description MongodbShardingInstance#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#node_storage MongodbShardingInstance#node_storage}
  */
  readonly nodeStorage: number;
}

export function mongodbShardingInstanceConfigserverListStructToTerraform(struct?: MongodbShardingInstanceConfigserverListStructOutputReference | MongodbShardingInstanceConfigserverListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
    node_storage: cdktf.numberToTerraform(struct!.nodeStorage),
  }
}


export function mongodbShardingInstanceConfigserverListStructToHclTerraform(struct?: MongodbShardingInstanceConfigserverListStructOutputReference | MongodbShardingInstanceConfigserverListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_storage: {
      value: cdktf.numberToHclTerraform(struct!.nodeStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceConfigserverListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MongodbShardingInstanceConfigserverListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    if (this._nodeStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStorage = this._nodeStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceConfigserverListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._nodeClass = undefined;
      this._nodeStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._nodeClass = value.nodeClass;
      this._nodeStorage = value.nodeStorage;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_storage - computed: false, optional: false, required: true
  private _nodeStorage?: number; 
  public get nodeStorage() {
    return this.getNumberAttribute('node_storage');
  }
  public set nodeStorage(value: number) {
    this._nodeStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageInput() {
    return this._nodeStorage;
  }
}
export interface MongodbShardingInstanceMongoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#description MongodbShardingInstance#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass: string;
}

export function mongodbShardingInstanceMongoListStructToTerraform(struct?: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
  }
}


export function mongodbShardingInstanceMongoListStructToHclTerraform(struct?: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceMongoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbShardingInstanceMongoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nodeClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nodeClass = value.nodeClass;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
}

export class MongodbShardingInstanceMongoListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbShardingInstanceMongoListStructOutputReference {
    return new MongodbShardingInstanceMongoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbShardingInstanceShardListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#description MongodbShardingInstance#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#node_storage MongodbShardingInstance#node_storage}
  */
  readonly nodeStorage: number;
}

export function mongodbShardingInstanceShardListStructToTerraform(struct?: MongodbShardingInstanceShardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
    node_storage: cdktf.numberToTerraform(struct!.nodeStorage),
  }
}


export function mongodbShardingInstanceShardListStructToHclTerraform(struct?: MongodbShardingInstanceShardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_storage: {
      value: cdktf.numberToHclTerraform(struct!.nodeStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceShardListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbShardingInstanceShardListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    if (this._nodeStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStorage = this._nodeStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceShardListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nodeClass = undefined;
      this._nodeStorage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nodeClass = value.nodeClass;
      this._nodeStorage = value.nodeStorage;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_storage - computed: false, optional: false, required: true
  private _nodeStorage?: number; 
  public get nodeStorage() {
    return this.getNumberAttribute('node_storage');
  }
  public set nodeStorage(value: number) {
    this._nodeStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageInput() {
    return this._nodeStorage;
  }
}

export class MongodbShardingInstanceShardListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbShardingInstanceShardListStructOutputReference {
    return new MongodbShardingInstanceShardListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance alibabacloudstack_mongodb_sharding_instance}
*/
export class MongodbShardingInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mongodb_sharding_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbShardingInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbShardingInstance to import
  * @param importFromId The id of the existing MongodbShardingInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbShardingInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mongodb_sharding_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/resources/mongodb_sharding_instance alibabacloudstack_mongodb_sharding_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbShardingInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbShardingInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mongodb_sharding_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPassword = config.accountPassword;
    this._auditStatus = config.auditStatus;
    this._backupPeriod = config.backupPeriod;
    this._backupTime = config.backupTime;
    this._csRootAccountPassword = config.csRootAccountPassword;
    this._dbAccountName = config.dbAccountName;
    this._dbAccountPassword = config.dbAccountPassword;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._name = config.name;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
    this._securityIpList = config.securityIpList;
    this._storageEngine = config.storageEngine;
    this._tdeStatus = config.tdeStatus;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._auditFilter.internalValue = config.auditFilter;
    this._configserverList.internalValue = config.configserverList;
    this._mongoList.internalValue = config.mongoList;
    this._shardList.internalValue = config.shardList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_password - computed: false, optional: true, required: false
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  public resetAccountPassword() {
    this._accountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // audit_status - computed: true, optional: true, required: false
  private _auditStatus?: string; 
  public get auditStatus() {
    return this.getStringAttribute('audit_status');
  }
  public set auditStatus(value: string) {
    this._auditStatus = value;
  }
  public resetAuditStatus() {
    this._auditStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditStatusInput() {
    return this._auditStatus;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_period'));
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_time - computed: true, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // cs_root_account_password - computed: false, optional: true, required: false
  private _csRootAccountPassword?: string; 
  public get csRootAccountPassword() {
    return this.getStringAttribute('cs_root_account_password');
  }
  public set csRootAccountPassword(value: string) {
    this._csRootAccountPassword = value;
  }
  public resetCsRootAccountPassword() {
    this._csRootAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csRootAccountPasswordInput() {
    return this._csRootAccountPassword;
  }

  // db_account_name - computed: false, optional: false, required: true
  private _dbAccountName?: string; 
  public get dbAccountName() {
    return this.getStringAttribute('db_account_name');
  }
  public set dbAccountName(value: string) {
    this._dbAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAccountNameInput() {
    return this._dbAccountName;
  }

  // db_account_password - computed: false, optional: false, required: true
  private _dbAccountPassword?: string; 
  public get dbAccountPassword() {
    return this.getStringAttribute('db_account_password');
  }
  public set dbAccountPassword(value: string) {
    this._dbAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAccountPasswordInput() {
    return this._dbAccountPassword;
  }

  // db_instance_description - computed: true, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
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

  // preferred_backup_period - computed: true, optional: true, required: false
  private _preferredBackupPeriod?: string[]; 
  public get preferredBackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_backup_period'));
  }
  public set preferredBackupPeriod(value: string[]) {
    this._preferredBackupPeriod = value;
  }
  public resetPreferredBackupPeriod() {
    this._preferredBackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupPeriodInput() {
    return this._preferredBackupPeriod;
  }

  // preferred_backup_time - computed: true, optional: true, required: false
  private _preferredBackupTime?: string; 
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }
  public set preferredBackupTime(value: string) {
    this._preferredBackupTime = value;
  }
  public resetPreferredBackupTime() {
    this._preferredBackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupTimeInput() {
    return this._preferredBackupTime;
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // security_ip_list - computed: true, optional: true, required: false
  private _securityIpList?: string[]; 
  public get securityIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ip_list'));
  }
  public set securityIpList(value: string[]) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }

  // storage_engine - computed: true, optional: true, required: false
  private _storageEngine?: string; 
  public get storageEngine() {
    return this.getStringAttribute('storage_engine');
  }
  public set storageEngine(value: string) {
    this._storageEngine = value;
  }
  public resetStorageEngine() {
    this._storageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEngineInput() {
    return this._storageEngine;
  }

  // tde_status - computed: false, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // audit_filter - computed: false, optional: true, required: false
  private _auditFilter = new MongodbShardingInstanceAuditFilterList(this, "audit_filter", true);
  public get auditFilter() {
    return this._auditFilter;
  }
  public putAuditFilter(value: MongodbShardingInstanceAuditFilter[] | cdktf.IResolvable) {
    this._auditFilter.internalValue = value;
  }
  public resetAuditFilter() {
    this._auditFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFilterInput() {
    return this._auditFilter.internalValue;
  }

  // configserver_list - computed: false, optional: false, required: true
  private _configserverList = new MongodbShardingInstanceConfigserverListStructOutputReference(this, "configserver_list");
  public get configserverList() {
    return this._configserverList;
  }
  public putConfigserverList(value: MongodbShardingInstanceConfigserverListStruct) {
    this._configserverList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configserverListInput() {
    return this._configserverList.internalValue;
  }

  // mongo_list - computed: false, optional: false, required: true
  private _mongoList = new MongodbShardingInstanceMongoListStructList(this, "mongo_list", true);
  public get mongoList() {
    return this._mongoList;
  }
  public putMongoList(value: MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable) {
    this._mongoList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoListInput() {
    return this._mongoList.internalValue;
  }

  // shard_list - computed: false, optional: false, required: true
  private _shardList = new MongodbShardingInstanceShardListStructList(this, "shard_list", true);
  public get shardList() {
    return this._shardList;
  }
  public putShardList(value: MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable) {
    this._shardList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardListInput() {
    return this._shardList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_password: cdktf.stringToTerraform(this._accountPassword),
      audit_status: cdktf.stringToTerraform(this._auditStatus),
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      cs_root_account_password: cdktf.stringToTerraform(this._csRootAccountPassword),
      db_account_name: cdktf.stringToTerraform(this._dbAccountName),
      db_account_password: cdktf.stringToTerraform(this._dbAccountPassword),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      name: cdktf.stringToTerraform(this._name),
      preferred_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
      security_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIpList),
      storage_engine: cdktf.stringToTerraform(this._storageEngine),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      audit_filter: cdktf.listMapper(mongodbShardingInstanceAuditFilterToTerraform, true)(this._auditFilter.internalValue),
      configserver_list: mongodbShardingInstanceConfigserverListStructToTerraform(this._configserverList.internalValue),
      mongo_list: cdktf.listMapper(mongodbShardingInstanceMongoListStructToTerraform, true)(this._mongoList.internalValue),
      shard_list: cdktf.listMapper(mongodbShardingInstanceShardListStructToTerraform, true)(this._shardList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_status: {
        value: cdktf.stringToHclTerraform(this._auditStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs_root_account_password: {
        value: cdktf.stringToHclTerraform(this._csRootAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_account_name: {
        value: cdktf.stringToHclTerraform(this._dbAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_account_password: {
        value: cdktf.stringToHclTerraform(this._dbAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredBackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_backup_time: {
        value: cdktf.stringToHclTerraform(this._preferredBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_engine: {
        value: cdktf.stringToHclTerraform(this._storageEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_filter: {
        value: cdktf.listMapperHcl(mongodbShardingInstanceAuditFilterToHclTerraform, true)(this._auditFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbShardingInstanceAuditFilterList",
      },
      configserver_list: {
        value: mongodbShardingInstanceConfigserverListStructToHclTerraform(this._configserverList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbShardingInstanceConfigserverListStructList",
      },
      mongo_list: {
        value: cdktf.listMapperHcl(mongodbShardingInstanceMongoListStructToHclTerraform, true)(this._mongoList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbShardingInstanceMongoListStructList",
      },
      shard_list: {
        value: cdktf.listMapperHcl(mongodbShardingInstanceShardListStructToHclTerraform, true)(this._shardList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbShardingInstanceShardListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
